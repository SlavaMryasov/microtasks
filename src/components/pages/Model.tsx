import { useParams } from "react-router-dom"
import { adidasArr } from "./Adidas"
import { Error404 } from "./Error404"


export const Model = (props: any) => {
    const params = useParams()
    console.log(params)
    console.log(adidasArr)
    const model = adidasArr.find(el => el.id === Number(params.id))
    return (
        <div>
            {model
                ? <>
                    <h3>{model.model}</h3>
                    <h4>{model.collection}</h4>
                    <img src={model.picture} alt="" />
                    <h5>{model.price}</h5>
                </>
                : <h2>Такой модели не существует</h2>}
        </div>
    )
}