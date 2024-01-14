"use client";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SenderMsg from "@/components/SenderMsg";
import VideoPlayer from "@/components/VideoPlayer";
import VideoPicker from "@/components/VideoPicker";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export default function PartyPage() {
  const chatRef = useRef();
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [emoji, setEmoji] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState("");

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatSocket, setChatSocket] = useState(null);

  useEffect(() => {
    async function getVideo() {
      const access = localStorage.getItem("access");
      try {
        const response = await fetch(
          `http://192.168.20.114:8000/api/video/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${access}`,
            },
          }
        );
        const resData = await response.json();
        setVideoData(resData);
        // console.log(resData);
      } catch (err) {
        console.log(err);
      }
    }

    getVideo();
  }, []);

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.20.114:8000/ws/chat/ewqeqw/");

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setMessages((prev) => [...prev, data.message, data.user]);
    };

    setChatSocket(socket);

    return () => {
      socket.close();
    };
  }, [messages]);

  function sendMessage() {
    if (chatSocket) {
      chatSocket.send(
        JSON.stringify({
          message: currentMessage,
          access: localStorage.getItem("access"),
        })
      );
    }
  }

  console.log(currentEmoji);
  console.log(videoData);

  return (
    <section className="flex flex-col gap-14 md:flex-row justify-between ">
      <div className="flex-auto">
        {videoData?.video_file && <VideoPlayer src={videoData.video_file} />}
      </div>
      <div>
        <div className=" bg-orange-200 min-w-[25rem] md:w-[25rem] p-4 rounded-sm max-h-[25rem] overflow-scroll">
          <div>
            {messages.length === 0 && <p>No messages yet.</p>}
            {messages.map((item, index) => (
              <SenderMsg key={index} item={item} emoji={currentEmoji} />
            ))}
          </div>
          <form className="mt-4 " onSubmit={(e) => e.preventDefault()}>
            <p className="flex gap-2">
              <input
                type="text"
                placeholder="Enter a comment..."
                className="w-full rounded-sm p-2 placeholder:text-sm bg-orange-300 placeholder:text-gray-500 ring-none outline-none ring-mainColor focus:ring transition"
                onChange={(e) => setCurrentMessage(e.target.value)}
              />

              <button
                type="submit"
                onClick={sendMessage}
                className="bg-mainColor mt-1 p-2 text-white rounded-md hover:bg-slate-900 text-sm hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
              <button type="button" onClick={() => setEmoji(!emoji)}>
                🥹
              </button>
              {emoji && (
                <Picker
                  data={data}
                  onEmojiSelect={(e) => {
                    setCurrentEmoji(e.native);
                    setEmoji(false);
                  }}
                />
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
