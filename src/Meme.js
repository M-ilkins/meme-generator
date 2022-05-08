import React from 'react';
import memeData from './memes-data'; 

export default function Meme(){
      // Creating a "meme" object and setting it to state
      const [meme, setMeme] = React.useState(
        {
          topText: '',
          bottomText: '',
          randomImage: "http://i.imgflip.com/1bij.jpg"
        }
      );

      // adding the memeData to a variable "allMemeImages"
      const [allMemeImages, setAllMemeImages] = React.useState(memeData);
      // getting a random number based on length of meme urls
      let randNum = Math.floor(Math.random() * allMemeImages.data.memes.length);
      // using random number to access random url inside of memes array
      let randURL = allMemeImages.data.memes[randNum].url;
      // event handler function to update/set meme object, notice the spread(...)
      // operator to unpack the *current* meme state object THEN change the 
      //randomImage property-not JUST update the randomImage property like one may
      //have done in class components in React! 
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