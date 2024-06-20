//cart-action
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchCartData=()=>{
    return async(dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'fetch...',
            message:'fetching card data',
        }))
        const fetchData=async()=>{
            const response= await fetch('https://a2128117-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
            if(!response.ok){
                throw new Error('sending cart data fails.') 
            }
            const resData = await response.json();
            console.log(resData);
            return resData
        }
        try{
            const data=await fetchData()
            dispatch(cartActions.replaceCart({
                items:data.items||[],
                totalQuantity:data.totalQuantity
            }));
            dispatch(uiActions.showNotification({
            status:'success',
            title:'Success!',
            message:'fetch cart data successfuly!',
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'fetch cart data failed!',
              }))
        }
    }
}

 const sendCartData=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'sending...',
            message:'sending card data',
        }))
        const sendRequest=async()=>{
            const response= await fetch('https://a2128117-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', 
            { method: 'PUT', body: JSON.stringify({
                items:cart.items||[],
                totalQuantity:cart.totalQuantity
            })})
            if(!response.ok){
            throw new Error('sending cart data fails.') 
            }
        }
        try{
            await sendRequest()
            dispatch(uiActions.showNotification({
            status:'success',
            title:'Success!',
            message:'send cart data successfuly!',
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'send cart data failed!',
              }))
        }
    }
}
export {sendCartData}