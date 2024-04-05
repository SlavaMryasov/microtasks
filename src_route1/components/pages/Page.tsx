import { useParams } from "react-router-dom"
import { AdidasItem } from "../dataState/dataState"
import { Error404 } from "./Error404"
import {NavLink} from 'react-router-dom'
import { NavWrapper } from "../styles/NavWrapper"
type PageType = {
pages: AdidasItem[]
}

export const Page = (props: PageType) => {
    const params = useParams()
    console.log(params.id)
    return (
        <div>
            <NavWrapper><NavLink to='page/picture'>adidas</NavLink></NavWrapper>
            {props.pages[Number(params.id)] 
            ? props.pages[Number(params.id)].model 
            : <Error404/>}
        </div>
    )
}