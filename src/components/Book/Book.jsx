import React from 'react';
import { Link } from 'react-router-dom';


const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags } = Book;

    return (
        <Link to={`/books/bookId`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className='bg-gray-200 py-9 rounded-2xl'>
    <img
      src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
      className='h-[166px]'
      alt="The Great Gatsby" />
  </figure>
  <div className="card-body">
      <div className='flex justify-center gap-4'>
      <button className="btn btn-xs bg-green-200 text-green-500">Fiction</button>
      <button className="btn btn-xs bg-green-200 text-green-500">Romance</button>
      </div>
    <h2 className="card-title">
     The Great Gatsby
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By: F. Scott Fitzgerald</p>
    <div className='divider'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Classic</div>
      <div className="badge badge-outline">rating: 4.5</div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;