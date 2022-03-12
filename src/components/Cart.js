import shoppingCart from '../images/bag-shopping-solid.svg';
import { Link } from "react-router-dom";

function Cart() {
    return (
      <div>
      <Link to="/cart"><img className="icon" src={shoppingCart} /></Link>
          
      </div>
    );
  }
  
  export default Cart;
  