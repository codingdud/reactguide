import { createSlice } from "@reduxjs/toolkit"
const uiState={cartVisible:false,notification:null}

const uiSlice=createSlice({
    name:"ui",
    initialState:uiState,
    reducers:{
        toggle(state){
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }
    }
})

export default uiSlice.reducer
export  const uiActions= uiSlice.actions
