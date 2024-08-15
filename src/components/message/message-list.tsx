import { useState } from "react";
import inbox from "../../utils/inbox.json";
import ChatDrawer from "./chat-drawer";
import type { DrawerProps } from "antd";

const MessageList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChatClick = (chat: any) => {
    setSelectedChat(chat);
    setExpanded(true);
  };

  const handleDrawerClose = () => {
    setExpanded(false);
  };

  const filteredChats = inbox.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [placement] = useState<DrawerProps["placement"]>("bottom");

  return (
    <div className="message-list">
      <div className="search-bar pb-2">
        <input
          type="text"
          placeholder="Search for a person..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-sm w-full p-2 rounded-md bg-zinc-800 text-white placeholder-zinc-500"
        />
      </div>

      {filteredChats.length > 0 ? (
        filteredChats.map((chat) => {
          const lastMessage = chat.chats[chat.chats.length - 1];
          const formattedDate = new Date(lastMessage.timestamp).toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "short",
            }
          );

          return (
            <div
              key={chat.id}
              className="flex justify-between items-center gap-2 border-b border-zinc-700 py-2 cursor-pointer"
              onClick={() => handleChatClick(chat)}
            >
              <div className="flex gap-2">
                <img
                  src={chat.profilePhoto}
                  alt={chat.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-white text-sm">{chat.name}</p>
                  <p className="text-zinc-400 text-xs">
                    {lastMessage.message.length > 30
                      ? lastMessage.message.substring(0, 30) + "..."
                      : lastMessage.message}
                  </p>
                </div>
              </div>
              <p className="text-zinc-500 text-xs">{formattedDate}</p>
            </div>
          );
        })
      ) : (
        <p className="text-zinc-500 text-center py-4">No chat found</p>
      )}

      {selectedChat && (
        <ChatDrawer
          chat={selectedChat}
          expanded={expanded}
          placement={placement}
          onClose={handleDrawerClose}
        />
      )}
    </div>
  );
};

export default MessageList;
