//import { useContext } from "react";
import { CartContext } from "../store/shoping-cart-context";
export default function Cart() {
 // const {items}=useContext(CartContext)
  

  return (
    <CartContext.Consumer>
      {(cartctx)=>{
        const totalPrice = cartctx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (<div id="cart">
        {cartctx.items.length === 0 && <p>No items in cart!</p>}
        {cartctx.items.length > 0 && (
          <ul id="cart-items">
            {cartctx.items.map((item) => {
              const formattedPrice = `$${item.price.toFixed(2)}`;
  
              return (
                <li key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <span> ({formattedPrice})</span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => cartctx.UpdateCartItemQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => cartctx.UpdateCartItemQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <p id="cart-total-price">
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
      </div>)
      }}
  </CartContext.Consumer>
  );
}
