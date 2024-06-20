import { createSlice } from "@reduxjs/toolkit"


const cartState={
    items:[],
    totalQuantity:0,
    isChange:false
}
const cartSlice=createSlice({
    name:'cart',
    initialState:cartState,
    reducers:{
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        add(state,action){
            const newItem=action.payload
            const existingItem=state.items.find(item=>item.id===newItem.id)
            state.totalQuantity++
            state.isChange=true
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            }else{
                state.isChange=true
                existingItem.quantity++
                existingItem.totalPrice+=newItem.price
            }
        },
        remove(state,action){
            const id=action.payload
            const existingItem=state.items.find(item=>item.id===id)
            state.totalQuantity--
            state.isChange=true
            if(existingItem.quantity===1){
                state.items = state.items.filter((item)=>item.id!==id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price
            }
        }
    }
})



export default cartSlice.reducer
export const cartActions=cartSlice.actions
