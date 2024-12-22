import React from 'react';
import bannerImg from '../../assets/books.jpg';


const Banner = () => {
    return (
        <div className="hero bg-[#13131305] min-h-screen rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mx-10'>
      <h1 className="text-5xl font-bold pb-4 mb-4">Books to freshen up your bookshelf</h1>
      <button className="btn bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;