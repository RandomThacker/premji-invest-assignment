import tweetData from "../../../utils/tweet-data.json";
import { TweetType } from "../../../utils/tweet-card.types";
import { useState, useEffect } from "react";
import userData from "../../../utils/user-data.json";

const useTweetWall = () => {
    const [tweets, setTweets] = useState<TweetType[]>([]);
    const [newTweetContent, setNewTweetContent] = useState("");
    const [nextId, setNextId] = useState(4);

    useEffect(() => {
      setTweets(tweetData);
      const maxId = tweetData.reduce((max, tweet) => Math.max(max, tweet.id), 0);
      setNextId(maxId + 1);
    }, []);

    const handleAddTweet = () => {
      if (newTweetContent.trim() !== "") {
        const newTweet: TweetType = {
          id: nextId,
          profilePicture: userData.profilePicture,
          name: userData.name,
          username: userData.username,
          content: newTweetContent,
          likedCount: 0,
          comments: [],
        };
        setTweets([newTweet, ...tweets]);
        setNewTweetContent("");
        setNextId(nextId + 1);
      }
    };

    const handleDeleteTweet = (id: number) => {
      setTweets(tweets.filter(tweet => tweet.id !== id));
    };

    return { handleAddTweet, newTweetContent, setNewTweetContent, tweets, userData, handleDeleteTweet };
}

export default useTweetWall;
