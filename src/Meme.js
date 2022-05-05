import React from 'react';
// import memePlaceholder from './images/memeimg.png';
import memeData from './memes-data'; 

export default function Meme(){
    let randNum = Math.floor(Math.random() * memeData.data.memes.length);
    let randURL = memeData.data.memes[randNum].url;

    return (
      <figure className='meme-container'>
        <img src={randURL}></img>
        <p className='bottom'>Top</p>
        <p className='top'>Bottom</p>
      </figure>
    );
};