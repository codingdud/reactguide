import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart-slice';
import uiReducer from './ui-slice';

const store=configureStore({
    reducer:{
        cartState:cartReducer,
        uiState:uiReducer
    }
})

export default store