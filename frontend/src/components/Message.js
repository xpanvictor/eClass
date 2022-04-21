import React from "react";

function Message({ text, sender }) {
  return (
    <div
      className={
        sender ? "space-x-2 flex mb-6  justify-end" : "space-x-2 flex mb-6"
      }
    >
      <div className="p-5 w-1/2  bg-[#7B818E]">
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
}

export default Message;
