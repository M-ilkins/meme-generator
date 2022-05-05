import React from 'react';
import Header from './Header';
import Form from './Form';
import Meme from './Meme';
import styles from './index.css';


export default function App() {
    return (
        <div>
          <Header/>
          <main>
            <Form/>
            <Meme/>
          </main>
        </div>
    )
};
