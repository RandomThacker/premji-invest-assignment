import { useState } from "react";
import ChatBox from "./chat-box";
import { Chat } from "../../utils/tweet-card.types";

type ChatDrawerProps = {
  chat: Chat;
  expanded: boolean;
  placement: any;
  onClose: () => void;
};

const ChatDrawer = ({ chat, expanded, onClose }: ChatDrawerProps) => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      sender: "Me",
      message: message,
      timestamp: new Date().toISOString(),
    };

    // Here we are assuming that `chat.chats` is part of your state, 
    // which should be updated when a new message is sent.
    chat.chats.push(newMessage);

    // Clear the input field
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default behavior of the Enter key (e.g., form submission)
      handleSendMessage();
    }
  };

  return (
    <div className="relative">
      <div
        className={`rounded-t-[15px] fixed bottom-0 overflow-y-scroll no-scrollbar right-80 border border-zinc-700 bg-[#1B1F23] w-[28vw] lg:max-w-[30vw] lg:mx-5 transition-all duration-300 ${
          expanded ? "h-[calc(100vh-25vh)]" : "h-[0px]"
        }`}
      >
        <div
          className="px-3 py-2 sticky top-0 left-0 w-full bg-zinc-800 flex items-center justify-between"
          onClick={onClose}
        >
          <span className="text-base text-white font-semibold">
            {chat.name}
          </span>
          <button className="text-sm">✖</button>
        </div>
        <div className={`px-4 py-2 ${expanded ? "block" : "hidden"}`}>
          <ChatBox chats={chat.chats} profilePicture={chat.profilePhoto} />
        </div>
        {/* Input field to type and send message */}
        {expanded && (
          <div className="sticky bottom-0 bg-[#1B1F23] px-4 py-2 flex items-center border-t border-zinc-700">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Add this line
              placeholder="Type a message..."
              className="flex-grow bg-transparent border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-sm text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDrawer;
