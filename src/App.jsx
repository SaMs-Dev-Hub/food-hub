import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedRecipes } from "./features/home/recipe-fetch-slice"

const App = () => {
  const dispatch = useDispatch();
  const { loading, recipes, error } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(fetchedRecipes());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.idCategory}>{recipe.strCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

