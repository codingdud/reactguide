import { Link } from "react-router-dom";
const PRODUCTS=[
  {id:"p1",titel:"Product 1",price:20,description:"This is product one"},
  {id:"p2",titel:"Product 2",price:35,description:"This is product two"},
  {id:"p3",titel:"Product 3",price:37,description:"This is product three"},
]
export default function Product() {
  return (<>
  <h1>Product list</h1>
  <ul>{PRODUCTS.map((obj)=>
  <li key={obj.id}><Link to={obj.id}>{obj.titel}</Link></li>
  )}
  </ul>
  </>)
}
