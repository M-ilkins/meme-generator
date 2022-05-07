import React from 'react';
import memeData from './memes-data'; 

export default function Meme(){

      let randNum = Math.floor(Math.random() * memeData.data.memes.length);
      let randURL = memeData.data.memes[randNum].url;
      const [memeUrl, setMemeUrl] = React.useState('');

      function generateMeme() {
        setMemeUrl(randURL);
    }
    
    return (
      <div>
        <form>
            <input type="text" placeholder='Top text'></input>
            <input type="text" placeholder='Bottom text'></input>
            <button type="button" onClick={generateMeme}>Get a new meme image  🖼</button>
        </form>
        <figure className='meme-container'>
          <img src={memeUrl}></img>
          <p className='bottom'></p>
          <p className='top'></p>
        </figure>
      </div>
    );
};