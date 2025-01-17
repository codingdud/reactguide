import classes from './Header.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
const Header = () => {
  const dispatch=useDispatch();
  const isAuth=useSelector(state=>state.auth.isAuth)
  const login=()=>{
    dispatch(authActions.login())
  }
  const logout=()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth?<ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>:<ul>
        <li>
            <button onClick={login}>login</button>
          </li>
          </ul>}
      </nav>
    </header>
  );
};

export default Header;
