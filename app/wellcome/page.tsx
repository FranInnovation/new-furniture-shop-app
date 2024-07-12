'use client'
import { useState, useEffect } from 'react';
import classes from './page.module.css';

export default function WellcomePage() {
    const [phrase, setPhrase] = useState('');

    const phrases = [
        'Do it now. Sometimes "later" becomes "never"',
        'You only fail when you stop trying',
        'The best way to predict the future is to invent it',
        '“Make each day your masterpiece.” John Wooden',
        'Always do your best. What you plant now, you will harvest tomorrow',
    ];

    useEffect(() => {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setPhrase(randomPhrase);
    }, []);

    return (
        <>
            <header className='header'>
                <h1>Welcome Page</h1>
            </header>
            <main className='main'>
                <p className={classes.phrase}>{phrase}</p>
            </main>
        </>
    );
}

