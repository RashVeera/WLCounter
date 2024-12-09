/*global chrome */
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount]=useState({wordCount:0,letterCount:0})
  const handleClick=async()=>{
    const [tab] = await chrome.tabs.query({
      active: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, { command: 'getWordCount' });
    setcount({wordCount:response.wordCount,letterCount:response.letterCount})
  }

  return (
    <div className="App">
      <h1> Word and Letter counter</h1>
      <button onClick={handleClick}>Click Me!</button>
      <p>This page has {count.wordCount} words and {count.letterCount} letters. </p>
    </div>
  );
}

export default App;
