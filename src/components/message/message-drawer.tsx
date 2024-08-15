import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useState } from "react";
import MessageList from "./message-list";

const MessageDrawer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="">
      <div
        className={`rounded-t-[15px] fixed bottom-0 overflow-y-scroll no-scrollbar right-0 border-thin border-black bg-[#1B1F23] w-[23vw] lg:max-w-[25vw] lg:mx-5 transition-all duration-300 ${
          expanded ? "h-[calc(100vh-25vh)]" : "h-[50px]"
        }`}
      >
        <div
          className="m-4 flex items-center justify-between"
          onClick={toggleExpansion}
        >
          <span className="text-xl text-white font-semibold pb-2">Inbox</span>
          <button className="text-white mb-2 rounded-full">
            {expanded ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </button>
        </div>
        <div className={`px-4   ${expanded ? "block" : "hidden"}`}>
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default MessageDrawer;
