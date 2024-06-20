import { useDispatch,useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const quantity=useSelector(state=>state.cartState.totalQuantity);
  const dispatch=useDispatch()
  const toggleCart=()=>{
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
