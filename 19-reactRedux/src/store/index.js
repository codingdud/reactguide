import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store=configureStore({
    reducer:{county:counterReducer,auth:authReducer}
})

export default store




/* const counterRedux=(state=initialState,action)=>{
    if(action.type==="inc"){
        return  {
            counter:state.counter+1,
            showCounter:state.showCounter
        }
    }else if (action.type==="dec"){
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }else if (action.type==="increase"){
        return {
            counter:state.counter+action.val,
            showCounter:state.showCounter
        }
    }else if (action.type==="toggle"){
        return {
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }else {
        return state;
    }
} 
const store=createStore(counterRedux)
*/

/* console.log(store.getState())

store.subscribe( ()=> console.log("The new State is",store.getState()))
store.dispatch({type:"inc"})  */