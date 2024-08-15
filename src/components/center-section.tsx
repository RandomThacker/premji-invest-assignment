import React, { useState, useEffect } from 'react';
import TweetCard from './tweet-card';
import tweetData from '../utils/data.json'; // Import your JSON data
import { TweetType } from '../utils/tweet-card.types';

const CenterSection: React.FC = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    setTweets(tweetData); // Assign the JSON data to the state
  }, []);

  return (
    <div className='flex items-center flex-col'>
      {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default CenterSection;
