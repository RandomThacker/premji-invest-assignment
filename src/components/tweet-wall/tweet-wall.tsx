import React from "react";
import TweetCard from "../tweet-card/tweet-card";
import useTweetWall from "./use-tweet-wall";

const TweetWall: React.FC = () => {
  const {
    handleAddTweet,
    newTweetContent,
    setNewTweetContent,
    tweets,
    userData,
    handleDeleteTweet
  } = useTweetWall();

  return (
    <div className="flex items-center flex-col no-scrollbar">
      {/* Input Field for Adding New Tweet */}
      <div className="bg-[#1B1F23] flex gap-3 rounded-md p-4 w-[550px] mb-4">
        <img
          src={userData.profilePicture}
          alt="profile-image"
          className="rounded-full h-8 w-8"
        />
        <div className="flex flex-col w-full">
          <textarea
            value={newTweetContent}
            onChange={(e) => setNewTweetContent(e.target.value)}
            placeholder="What's happening?"
            className="bg-[#2C2F33] text-white p-2 rounded-md w-full h-20"
          />
          <button
            onClick={handleAddTweet}
            className="bg-blue-500 text-white px-4 py-1 text-sm rounded-full mt-2 self-end"
          >
            Tweet
          </button>
        </div>
      </div>

      {/* Render Existing Tweets */}
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} onDelete={handleDeleteTweet} />
      ))}
    </div>
  );
};

export default TweetWall;
