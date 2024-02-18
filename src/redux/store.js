// import { configureStore } from '@reduxjs/toolkit'
// import recipeFetchSlice from '../features/home/recipe-fetch-slice'

// export const store = configureStore({
//   reducer: {
//     recipes:recipeFetchSlice
//   },
// })
import { configureStore } from '@reduxjs/toolkit';
import { recipeSlice } from '../features/home/recipe-fetch-slice';

export const store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
  },
});
