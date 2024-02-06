import React from 'react';
import {Link} from 'react-router-dom'

const RecipeCard = ({ item }) => {
  return (
    <div className='flex flex-col shadow-md border-collapse bg-white p-4 rounded-md w-full md:w-64 m-4'>
      <div className='w-full h-40 mb-4'>
        <img className='object-cover w-full h-full rounded-md' src={`${item.image_url}`} alt="image" />
      </div>
      <div className='text-lg font-semibold mb-2'>{item.title}</div>
      <div className='text-gray-600 mb-2'>{item.publisher}</div>
      <div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
        <Link to={`/recipe-item/${item.id}`}>Recipe Details</Link>  
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
