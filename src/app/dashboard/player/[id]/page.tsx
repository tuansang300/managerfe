"use client";
import ImageDecode from "@/components/ImageDecode";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  params: {
    id: string;
  };
};

const PlayerPage = (props: Props) => {
  const { data: session, status } = useSession();
  const socketRef = useRef<WebSocket | null>(null);
  const [base64Image, setBase64Image] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const setMessageFromServer = useCallback((data: any) => {
    switch (data.event) {
      case "RMSG_RECORD":
        setBase64Image(data.data);
        break;
      default:
        console.log("Unhandled event:", data.event);
        break;
    }
  }, []);

  const initSocket = useCallback(() => {
    if (!socketRef.current) {
      const websocket = process.env.WSCONNECT || "ws://127.0.0.2:8888";
      const newSocket = new WebSocket("ws://" + websocket);
      newSocket.onopen = () => {
        const updateInfo = {
          event: "events",
          data: {
            msg: "MSG_UPDATEINFORWEBPAGE",
            userid: session?.user?.username,
          },
        };
        newSocket.send(JSON.stringify(updateInfo));
      };
      newSocket.onmessage = (event) => {
        setMessageFromServer(JSON.parse(event.data));
      };
      socketRef.current = newSocket;
    }
  }, [session, setMessageFromServer]);

  const GetImageUser = (username: string) => {
    console.log("GetImageUser", isRecording);
    const getImageUser = {
      event: "events",
      data: {
        msg: "MSG_RECORD",
        userid: username,
        status: isRecording == false ? "true" : "false",
      },
    };
    setIsRecording(!isRecording);
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(getImageUser));
    } else {
      console.log("WebSocket is not open, cannot send message");
    }
  };

  const CloseShareImage = (username: string) => {
    const getImageUser = {
      event: "events",
      data: {
        msg: "MSG_RECORD",
        userid: username,
        status: "false",
      },
    };
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(getImageUser));
    } else {
      console.log("WebSocket is not open, cannot send message");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      initSocket();

      return () => {
        if (socketRef.current) {
          CloseShareImage(props.params.id);
          socketRef.current.close();
        }
      };
    }
  }, [status]);
  return (
    <div>
      {status === "authenticated" ? (
        <>
          <button
            onClick={() => GetImageUser(props.params.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isRecording == false ? "Start Recording" : "Stop Recording"}
          </button>
          {isRecording == true ? <ImageDecode base64Data={base64Image} /> : ""}
        </>
      ) : (
        <p>Please log in to see the player list.</p>
      )}
    </div>
  );
};

export default PlayerPage;
