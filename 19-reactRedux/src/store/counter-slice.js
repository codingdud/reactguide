import { createSlice } from "@reduxjs/toolkit";

const initialState={counter:0,showCounter:true}
const counterSlice =createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        inc(state){
            state.counter++
        },
        dec(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggle(state){
            state.showCounter=!state.showCounter
        },
    }
})

export default counterSlice.reducer
export const counterAction=counterSlice.actions;