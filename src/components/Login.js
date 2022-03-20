import user from '../images/user-solid.svg';
import { Link } from "react-router-dom";

function Login() {
    return (
      <div>
      <Link to="/login"><img className="icon" src={user} /></Link>
          
      </div>
    );
  }
  
  export default Login;
  
  