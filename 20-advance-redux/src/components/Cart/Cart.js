import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items=useSelector(state=>state.cartState.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((data)=><CartItem
          item={{ 
            id:data.id, 
            title: data.name, 
            quantity:data.quantity, 
            total:data.totalPrice, 
            price:data.price }}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
