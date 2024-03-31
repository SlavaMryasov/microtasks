import { useParams } from "react-router-dom"
import { AdidasItem } from "../dataState/dataState"
import { Error404 } from "./Error404"

type PageType = {
    adidas: AdidasItem[]
}


export const Model = (props: PageType) => {
    // debugger
    const params = useParams()
    console.log(params)
    const model = props.adidas.find(el => el.model === params.model)
    return (
        <div>
            {model ? <div>
                <h2>{model.model}</h2>
                <h3>{model.collection}</h3>
                <h3>{model.price}</h3>
                <img src={model.picture} alt="" />
            </div>
            : <div>dddd</div>}
        </div>
    )
} 