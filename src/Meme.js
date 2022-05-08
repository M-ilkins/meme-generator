import React from 'react';
import memeData from './memes-data'; 

export default function Meme(){

      const [meme, setMeme] = React.useState(
        {
          topText: '',
          bottomText: '',
          randomImage: "http://i.imgflip.com/1bij.jpg"
        }
      );


      const [allMemeImages, setAllMemeImages] = React.useState(memeData);

      let randNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
      let randURL = allMemeImages.data.memes[randNum].url;

      function generateMeme() {
        setMeme(currentMeme => {
          return {
            ...currentMeme,
            randomImage: randURL
          }
        })
    };



    

    
    return (
      <div>
        <form>
            <input type="text" placeholder='Top text'></input>
            <input type="text" placeholder='Bottom text'></input>
            <button type="button" onClick={generateMeme}>Get a new meme image  🖼</button>
        </form>
        <figure className='meme-container'>
          <img src={meme.randomImage}></img>
          <p className='bottom'></p>
          <p className='top'></p>
        </figure>
      </div>
    );
};