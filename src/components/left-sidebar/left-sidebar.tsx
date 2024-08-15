import Home from "../../assets/icons/home.svg";
import Message from "../../assets/icons/message.svg";
import Notifications from "./notification";
import Profile from "./profile";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col justify-between h-full pl-10 border-r border-zinc-800 py-6">
      <div className="flex flex-col gap-3">
        <button className="flex gap-3 w-fit py-2 px-3 rounded-full hover:bg-zinc-700">
          <img src={Home} alt="" />
          <p className="text-white text-xl">Home</p>
        </button>

        <button className="flex gap-3 w-fit py-2 px-3 rounded-full hover:bg-zinc-700">
          <img src={Message} alt="" />
          <p className="text-white text-xl">Messages</p>
        </button>
        <Notifications />
      </div>
      <Profile/>
    </div>
  );
};

export default LeftSideBar;
