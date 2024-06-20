import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div>
        <h1>my home page</h1>
        <p>go to <Link to="product">proudct</Link></p>
    </div>
  )
}
