import { Link, useParams } from "react-router-dom"
export default function ProductDetais() {
    const params=useParams()
  return (<>
  <div>ProductDetais {params.id}</div>
  <Link to=".." relative="path">back</Link>
  </>)
}
