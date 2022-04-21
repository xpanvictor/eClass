import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Message from "./Message";
function Discussion() {
  const [messages, setMessages] = useState(["Hello World!"]);
  const [newMessage, setNewMessage] = useState("");
  const [sender, setSender] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    const regexp = "/^S*$/";
    if (newMessage === "") {
      alert("Type Something");
    } else {
      setMessages([...messages, newMessage]);
      setSender(true);
      setNewMessage("");
    }
  };
  return (
    <div className="rounded-md bg-gradient-to-br from-[#0B0C0F] to-[#2A3555] md:min-w-[500px] p-5 pb-10 shadow-lg drop-shadow-lg h-[80vh] ">
      <div>
        <h1 className="text-center text-white">Discussion</h1>
      </div>
      <div className=" flex flex-col justify-end h-full ">
        <div className="overflow-y-scroll mb-5">
          {messages.map((text, i) => {
            return (
              <div key={i}>
                <Message text={text} sender={sender} />
              </div>
            );
          })}
        </div>

        <form className="flex mx-auto w-4/5">
          <input
            type="text"
            placeholder="Drop short message"
            className="bg-[#808696] rounded px-6 py-3 placeholder:text-white w-full text-white outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            type="submit"
            className="active:bg-[#808696] rounded-full"
            onClick={sendMessage}
          >
            <PaperAirplaneIcon
              className="p-1 ml-2 text-white rotate-45"
              height={40}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Discussion;
