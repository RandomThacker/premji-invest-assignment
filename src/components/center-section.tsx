import React, { useState, useEffect } from 'react';
import TweetCard from './tweet-card';
import tweetData from '../utils/tweet-data.json';
import { TweetType } from '../utils/tweet-card.types';

const CenterSection: React.FC = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    setTweets(tweetData);
  }, []);

  return (
    <div className='flex items-center flex-col no-scrollbar'>
      {tweets.map((tweet, index) => (
        <TweetCard key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default CenterSection;
