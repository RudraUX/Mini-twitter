import React from "react";
import Tweet from "./Tweet";

const TweetList = ({author,tweets,setTweet}) =>{
return(
    <div>
        {tweets.map((tweet) => <Tweet key={tweet.id} author={author} tweet={tweet} tweets={tweets} setTweet={setTweet} />)}
    </div>
)
}
export default TweetList;