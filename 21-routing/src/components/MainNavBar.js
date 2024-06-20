import { NavLink } from "react-router-dom";
import classes from './MainNavBar.module.css'
export default function MainNavBar() {
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="" className={
                  ({isActive})=>
                  (isActive?classes.active:undefined)
                  } end>Home</NavLink></li>
                <li><NavLink to="product" className={
                  ({isActive})=>
                  (isActive?classes.active:undefined)
                  }>product</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
