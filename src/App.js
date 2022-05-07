import React from 'react';
import Header from './Header';
import Meme from './Meme';
import styles from './index.css';


export default function App() {
    return (
        <div>
          <Header/>
          <main>
            <Meme/>
          </main>
        </div>
    )
};
