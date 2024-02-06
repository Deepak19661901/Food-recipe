import React, { useContext } from 'react'
import FoodContext from '../context/FoodContext'
import RecipeCard from '../components/RecipeCard';

const Favoroite = () => {
  const {favouriteList} = useContext(FoodContext);
  return (
    <>
    <div className='flex flex-wrap justify-center pt-5 px-4 md:px-8'>
      {
        favouriteList && favouriteList.length ?favouriteList.map((item, index) => (
        <RecipeCard key={index} item={item} />
      )):<h1 className=' AddFavList'>ADD Food In you Favourite List</h1>
      }
    </div>

    </>
  )
}

export default Favoroite
