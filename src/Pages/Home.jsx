import React, { useContext } from 'react';
import FoodContext from '../context/FoodContext';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import CoverPage from '../components/CoverPage'

const Home = () => {
  const { searchRecipe, RecipeList ,loading ,setLoading} = useContext(FoodContext);

  if(loading){
    return <Loading/>
  }
 
  return (
    <>
    <div className='flex flex-wrap justify-center  px-4 md:px-8'>
      {RecipeList.map((item, index) => (
        <RecipeCard key={index} item={item} />
      ))}

    </div>

    <div className='flex flex-wrap justify-center  pt-24 px-4 md:px-8'>
    {
      searchRecipe===''?<CoverPage/>:null
    }
    </div>

    </>
  );
}

export default Home;
