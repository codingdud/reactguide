import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetais from "./pages/ProductDetais";
// const routeDefination=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}/>
//     <Route path="/product/" element={<Product />}/>
//   </Route>
// )

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<Home/>},
      {path:'product',element:<Product/>},
      {path:'product/:id',element:<ProductDetais/>}
    ]
  },
])

//const router=createBrowserRouter(routeDefination)
function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
