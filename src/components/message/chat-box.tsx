import { Key } from "react";
import { ChatMessage } from "../../utils/tweet-card.types";

type ChatBoxProps = {
  chats: ChatMessage[];
  profilePicture: string;
};

const ChatBox = ({ chats,profilePicture }: ChatBoxProps) => {
    return (
      <>
        {chats.map((message: { sender: string; message: string}, index: Key | null | undefined) => (
          <div key={index} className={`flex gap-2 ${message.sender === "Me" ? "justify-end" : ""}`}>
            {message.sender !== "Me" && (
              <img src={profilePicture} alt={message.sender} className="h-6 w-6 rounded-full" />
            )}
            <div
              className={`bg-zinc-700 w-2/3 p-3 mb-3 rounded-md ${
                message.sender === "Me" ? "self-end rounded-tr-none" : "self-start rounded-tl-none"
              }`}
            >
              <p className="text-sm text-zinc-200">{message.message}</p>
            </div>
            {message.sender === "Me" && (
              <img src="https://media.licdn.com/dms/image/D560BAQHOSwmGYlxcFQ/company-logo_200_200/0/1690463284814/premji_invest_logo?e=2147483647&v=beta&t=_nF-h9cpY_6tpB-yDyJ8jdHSTXePP152T1tGvYYK0kc" alt={message.sender} className="h-6 w-6 rounded-full" />
            )}
          </div>
        ))}
      </>
    );
  };
  
  export default ChatBox;
  