import { Outlet } from "react-router"

const PostLayOut = () => {
    return <div className="bg-slate-100 h-screen p-1">
        <Outlet/>
    </div>
}
export default PostLayOut