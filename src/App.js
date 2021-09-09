import React,{useState} from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';



function App() {
  //app states
  const [name1,setName1] = useState("Pollab");
  
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweet] = useState([]);

  return (
    <div>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweet={setTweet}/>
      <TweetList author={name1} tweets={tweets} setTweet={setTweet}/>
    </div>
  );
}

export default App;
