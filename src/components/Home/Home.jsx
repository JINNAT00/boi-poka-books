import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import Book from '../Book/Book';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <Book></Book>
        </div>
    );
};

export default Home;