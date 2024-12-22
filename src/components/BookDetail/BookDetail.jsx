import React from 'react';
import { useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDB';

const BookDetail = () => {

    const {bookId} =useParams();
    // const data = useLoaderData();
    // const id = parseInt(bookId);


    // const book = data.find(book => book.bookId === id);


    // const {bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    }


    return (
        <div className='p-6'>
            <h2 className='text-2xl'>Book Details : {bookId}</h2>
            <h2 className="text-5xl"> BookName: 'The Great Gatsby' </h2>
            <p>
     Author: F. Scott Fitzgerald
     <div className="divider"></div>
    <br />
    <img className='h-[166px]' src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg" alt="" /> 
    <div className="divider"></div>
    <div className="border-2 bg-gray-100">
    Review: 'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.
    </div>
    TotalPages: 192
    <br />
    Rating: 4.5
    <br />
    Category: Classic
    <br />
    Type: Fiction, Romance
    <br />
    Publisher: Scribner
    <br />
    Year Of Publishing: 1925
    </p>
    <div className="divider"></div>
    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
    <button className="btn btn-accent">Add to Wish List</button>
</div>
);
};

export default BookDetail;