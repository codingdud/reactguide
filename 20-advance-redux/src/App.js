import { useSelector,useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-action';
import Notification from './components/UI/Notification';


let isInitial=true
function App() {
  const dispatch=useDispatch()
  const isShow=useSelector(state=>state.uiState.cartVisible)
  const status=useSelector((state)=> state.uiState.notification)
  const cart=useSelector(state=>state.cartState)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  useEffect(()=>{
    if(isInitial){
      //dispatch(fetchCartData())
      isInitial=false
      return 
    }
    if(cart.isChange){
      dispatch(sendCartData(cart))
    }
    
  },[cart,dispatch])


  return (
    <Fragment>
      {status&&<Notification {...status}/>}
      <Layout>
        {isShow&&<Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;






//useEffect redux store management
/* const cart=useSelector(state=>state.cartState)
useEffect(()=>{
  const sendCardData=async()=>{
    dispatch(uiActions.showNotification({
      status:'pending',
      title:'sending...',
      message:'sending card data',
    }))
    const response= await fetch('https://a2128117-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', 
    { method: 'PUT', body: JSON.stringify(cart) })
    if(!response.ok){
      throw new Error('sending cart data fails.') 
    }
    dispatch(uiActions.showNotification({
      status:'success',
      title:'Success!',
      message:'send cart data successfuly!',
    }))
  }
  if(isInitial){
    isInitial=false
    return 
  }
  sendCardData().catch((err)=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error!',
      message:'send cart data failed!',
    }))
  })
},[cart,dispatch]) */