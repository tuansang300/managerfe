"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface Player {
  username: string;
  character: string;
  map: number;
  server: string;
  clienton: boolean;
}

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const socketRef = useRef<WebSocket | null>(null);
  const [listPlayer, setListPlayer] = useState<Player[]>([]);

  const setMessageFromServer = useCallback((data: any) => {
    switch (data.event) {
      case "SMSG_LISTUSER":
        const dataplayer: Player[] = data.data;
        setListPlayer(dataplayer);
        break;
      default:
        console.log("Unhandled event:", data.event);
        break;
    }
  }, []);

  const initSocket = useCallback(() => {
    if (!socketRef.current) {
      const newSocket = new WebSocket("wss://103.145.63.111:8888");
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

  useEffect(() => {
    if (status === "authenticated") {
      initSocket();
      getListPlayer();
      const intervalGetList = setInterval(getListPlayer, 5000);
      return () => {
        if (socketRef.current) {
          socketRef.current.close();
        }
        clearInterval(intervalGetList);
      };
    }
  }, [status, initSocket, getListPlayer]);

  return (
    <div>
      {status === "authenticated" ? (
        listPlayer.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <table className="shadow-lg bg-white border-collapse">
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Username
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Character
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">Map</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Server</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Status</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Action</th>
            </tr>
            {listPlayer.map((player, index) => (
              <tr key={index} className="hover:bg-gray-50 focus:bg-gray-300">
                <td className="border px-8 py-4">{player.username}</td>
                <td className="border px-8 py-4">{player.character}</td>
                <td className="border px-8 py-4">{player.map}</td>
                <td className="border px-8 py-4">{player.server}</td>
                <td className="border px-8 py-4">
                  {player.clienton ? "Online" : "Offline"}
                </td>
                <td className="border px-8 py-4">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/player/${player.username}`)
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Get Screen
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )
      ) : (
        <p>Please log in to see the player list.</p>
      )}
    </div>
  );
};

export default Page;
