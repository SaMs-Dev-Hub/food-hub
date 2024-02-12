import { createSlice } from "@reduxjs/toolkit";
const intialState = {
    loading:false,
    recipes:[],
    error:""


}
const recipeSlice = createSlice({
name:"recipe",
intialState,
})