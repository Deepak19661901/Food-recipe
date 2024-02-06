import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodContext from '../context/FoodContext';

const Details = () => {
  const { recipeDetails, setRecipeDetails,handelAddtoFavaourite,favouriteList } = useContext(FoodContext);
  const { id } = useParams();

  const fetchRecipeDetailsData = async () => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      if (response.ok) {
        const result = await response.json();
        setRecipeDetails(result.data.recipe);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipeDetailsData();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <img
          className="w-full md:max-w-2xl lg:max-w-3xl h-auto sm:max-h-48 md:max-h-64 lg:max-h-96 rounded-md object-cover"
          src={recipeDetails?.image_url}
          alt="Food_image"
        />
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>handelAddtoFavaourite(recipeDetails)}
        >
        {favouriteList.findIndex((item) => item.id === recipeDetails?.id) === -1
    ? "Save as Favorite"
    : "Remove From Favourites"}
        </button>
      </div>
      <div className="mb-4">
        <span className="text-cyan-700">Publisher: {recipeDetails?.publisher}</span>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">{recipeDetails?.title}</h2>
      </div>
      <div>
        <span className="text-cyan-700">Ingredients:</span>
        <ul className="list-disc pl-4">
          {recipeDetails?.ingredients.map((ing, index) => (
            <li key={index} className="text-gray-600">
              <span>{ing?.quantity}</span> {ing?.unit} {ing?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
