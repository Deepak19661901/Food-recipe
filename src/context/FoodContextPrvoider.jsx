import { useEffect, useState } from "react";
import FoodContext from "./FoodContext";
import {useNavigate } from "react-router-dom";

const FoodContextProvider = ({ children }) => {
  const navigate = useNavigate()

 const name = "deepak";

  const [searchRecipe, setSearchRecipe] = useState("");
  const [RecipeList, setRecipeList] = useState([]);
  const [loading ,setLoading] = useState(false);
  const [recipeDetails,setRecipeDetails]= useState(null);
  const [favouriteList,setFavaouriteList]  = useState([]);

  // console.log(RecipeList)

  useEffect(() => {
    const fetchRecipeData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchRecipe}`);
        if (response.ok) {
          const result = await response.json();
          setRecipeList(result.data.recipes)
          setLoading(false);
         
          navigate("/")
        }
        else {
          console.log("fetchData is not working")
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    fetchRecipeData();
  }, [searchRecipe])


const handelAddtoFavaourite=(getCurrentItem)=>{
  // console.log("addTofav",getCurrentItem)
   const copyFavList = [...favouriteList];
   const index = copyFavList.findIndex(item=>item.id===getCurrentItem.id);
   if(index===-1){
    copyFavList.push(getCurrentItem)
   }
   else{
    copyFavList.splice(index,1)
   }
   setFavaouriteList(copyFavList)
}
//  console.log(favouriteList)
  return (
    <FoodContext.Provider
      value={{ 
        name,
        searchRecipe,
        setSearchRecipe,
        RecipeList, 
        setRecipeList,
        loading ,
        setLoading,
        recipeDetails,
        setRecipeDetails,
        handelAddtoFavaourite,
        favouriteList
         }}
    >
      {children}
    </FoodContext.Provider>
  )
}
export default FoodContextProvider;