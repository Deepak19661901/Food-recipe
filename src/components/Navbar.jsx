import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHeart } from "react-icons/fa";
import FoodContext from '../context/FoodContext';

const Navbar = () => {
  const { searchRecipe, setSearchRecipe } = useContext(FoodContext);
  const { favouriteList } = useContext(FoodContext);
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center px-5 shadow py-3 w-full md:w-94 h-18 sticky top-0'>
      <div className='text-cyan-700 text-center text-xl font-semibold md:hidden'>
        <NavLink to={"/"}>Food recipe</NavLink>
      </div>
      <div className='flex mt-2 md:mt-0'>
        <div className='border-none'>
          <input
            className='text-center text-sm md:text-base px-4 py-1 outline-none shadow-xl'
            type="text"
            placeholder='Search Recipe here..'
            value={searchRecipe}
            name='searchRecipe'
            onChange={(event) => setSearchRecipe(event.target.value)}
          />
        </div>
      </div>
      <div className='flex justify-between text-center text-m font-normal px-2 mt-2 md:mt-0'>
        <div className='px-4 md:px-7 font-bold'>
          <NavLink to={"/"} className="flex items-center">
            <FaHome className="mr-1" />
            <span className="hidden md:inline">Home</span>
          </NavLink>
        </div>
        <div className='font-bold'>
          <NavLink to={"/favourite"} className="flex items-center">
            <FaHeart className="mr-1" style={{ color: favouriteList.length > 0 ? 'red' : 'black' }} />
            <span className="hidden md:inline" >
              Favorites
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
