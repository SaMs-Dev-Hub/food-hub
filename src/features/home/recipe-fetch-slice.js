import { createSlice } from "@reduxjs/toolkit";
const intialState = {
    loading:false,
    recipes:[],
    error:""


}
export const recipeSlice = createSlice({
name:"recipe",
intialState,
reducers:{

}
})