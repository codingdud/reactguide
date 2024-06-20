import { Outlet } from "react-router-dom"
import MainNavBar from "../components/MainNavBar"
export default function Root() {
  return (
    <>
        <MainNavBar/>
        <main>
            <Outlet/>
        </main>
        
    </>
  )
}
