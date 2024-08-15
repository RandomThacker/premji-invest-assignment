import "./App.css";
import LeftSideBar from "./components/left-sidebar/left-sidebar";
import MessageDrawer from "./components/message/message-drawer";
import TweetWall from "./components/main-section/tweet-wall/tweet-wall";
import RightSideBar from "./components/right-sidebar/right-sidebar";

function App() {
  return (
    <>
      <div className="flex justify-between h-screen w-full no-scrollbar">
        <div className="w-[35%] h-full overflow-hidden">
          <LeftSideBar />
        </div>
        <div className="w-[100%] overflow-y-scroll no-scrollbar py-4">
          <TweetWall />
        </div>
        <div className="w-[35%] overflow-hidden">
          <RightSideBar />
        </div>
      </div>
      <MessageDrawer />
    </>
  );
}

export default App;
