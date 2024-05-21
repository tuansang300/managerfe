"use client";
import { Button } from "@/components/Button";
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
      const newSocket = new WebSocket("ws://103.145.63.111:8888");
      newSocket.onopen = () => {
        const updateInfo = {
          event: "events",
          data: {
            msg: "MSG_UPDATEINFORWEBPAGE",
            serverstring: "192.168.1.17",
            userid: session?.user?.username,
          },
        };
        console.log(updateInfo);
        newSocket.send(JSON.stringify(updateInfo));
      };
      newSocket.onmessage = (event) => {
        setMessageFromServer(JSON.parse(event.data));
      };
      socketRef.current = newSocket;
    }
  }, [session, setMessageFromServer]);

  const getListPlayer = useCallback(() => {
    const getlistUser = {
      event: "events",
      data: {
        msg: "MSG_LISTUSER",
      },
    };
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(getlistUser));
    } else {
      console.log("WebSocket is not open, cannot send message");
    }
  }, []);

  const GetImageUser = (username: string) => {
    const getImageUser = {
      event: "events",
      data: {
        msg: "MSG_RECORD",
        userid: username,
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
          socketRef.current.close();
        }
      };
    }
  }, [status, initSocket, getListPlayer]);
  return (
    <div>
      {status === "authenticated" ? (
        <>
          <button
            onClick={() => GetImageUser(props.params.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Screen
          </button>
          <ImageDecode base64Data={base64Image} />
        </>
      ) : (
        <p>Please log in to see the player list.</p>
      )}
    </div>
  );
};

export default PlayerPage;
