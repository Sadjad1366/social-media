import { Outlet } from "react-router"

const Root = () => {
    return <div className="bg-slate-50 h-screen">
        <Outlet/>
    </div>
}
export default Root