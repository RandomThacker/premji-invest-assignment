import React, { useState, useEffect } from 'react';
import TweetCard from './tweet-card/tweet-card';
import tweetData from '../utils/tweet-data.json';
import { TweetType } from '../utils/tweet-card.types';
import userData from "../utils/user-data.json";

const CenterSection: React.FC = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [newTweetContent, setNewTweetContent] = useState('');

  useEffect(() => {
    setTweets(tweetData);
  }, []);

  const handleAddTweet = () => {
    if (newTweetContent.trim() !== '') {
      const newTweet: TweetType = {
        profilePicture: userData.profilePicture,
        name: userData.name,
        username:  userData.username,
        content: newTweetContent,
        likedCount: 0,
        comments: [],
      };
      setTweets([newTweet, ...tweets]);
      setNewTweetContent(''); // Clear the input field
    }
  };

  console.log("tweets", tweets)

  return (
    <div className='flex items-center flex-col no-scrollbar'>
      {/* Input Field for Adding New Tweet */}
      <div className="bg-[#1B1F23] flex flex-col gap-2 rounded-md p-4 w-[550px] mb-4">
        <textarea
          value={newTweetContent}
          onChange={(e) => setNewTweetContent(e.target.value)}
          placeholder="What's happening?"
          className="bg-[#2C2F33] text-white p-2 rounded-md w-full h-20"
        />
        <button
          onClick={handleAddTweet}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 self-end"
        >
          Tweet
        </button>
      </div>

      {/* Render Existing Tweets */}
      {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default CenterSection;
