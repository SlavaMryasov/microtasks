import { Outlet } from "react-router-dom"


export const Crosses = () => {
return (
    <div>
        <div>header</div>
        <Outlet/>
        <div>footer</div>
    </div>
)
}