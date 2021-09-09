import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({textInput, setTextInput, tweets, setTweet}) => {
 
  const useInputHandeler = (e) => {
    setTextInput(e.target.value);
  };

  const tweetHandeler = (e) => {
    e.preventDefault();
    setTweet([...tweets,{message : textInput, id:uuidv4()}]);
    setTextInput("");
  }

  return (
    <div>
      <form onSubmit={tweetHandeler}>
        <textarea
          value={textInput}
          onChange={useInputHandeler}
          cols="60"
          rows="10"
        ></textarea>
        <button>Create Tweet</button>
      </form>
    </div>
  );
};

export default CreateTweet;
