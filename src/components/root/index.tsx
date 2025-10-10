import { Outlet } from "react-router"
import Navbar from "../common/navbar"

const Root = () => {
    return <div className="bg-slate-50 h-screen">
        <Navbar/>
        <Outlet/>
    </div>
}
export default Root