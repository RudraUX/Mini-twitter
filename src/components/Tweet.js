import React from 'react';

const Tweet = ({author,tweet,setTweet,tweets}) => {


    const removeTweetHandeler = () =>{
        setTweet(tweets.filter(state => state.id !== tweet.id));
    }
    return(
        <div>
            <h2>{author}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={removeTweetHandeler}>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;