import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchedRecipes = createAsyncThunk(
  "recipes/fetchedRecipes",
  async () => {
    try {
      const fetch = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return fetch.data.categories
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  loading: false,
  recipes: [],
  error: ""
};

 export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchedRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchedRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes=action.payload
      })
      .addCase(fetchedRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


