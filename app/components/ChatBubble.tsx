import React from "react";
import Image from "next/image";

const ChatComponent: React.FC = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image src="/LandingPageLogo.svg" alt="MindTalk Logo" width={40} height={40} />
          </div>
        </div>
        <div className="chat-bubble bg-transparent text-[#403635]">
          Hi! How are you feeling today?
        </div>
      </div>
      <div className="chat chat-end">
        {/* dynamically add user chat bubble*/}
      </div>
    </>
  );
};

export default ChatComponent;

