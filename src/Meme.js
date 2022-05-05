import React from 'react';
// import memePlaceholder from './images/memeimg.png';
import memeData from './memes-data'; 

export default function Meme(){
    let randNum = Math.floor(Math.random() * memeData.data.memes.length);
    let randURL = memeData.data.memes[randNum].url;

    return (
      <img src={randURL}></img>
    );
};