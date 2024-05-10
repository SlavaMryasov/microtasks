import { useParams } from "react-router-dom"
import { SnickersItem } from "../../App"
import { adidasArr } from "./Adidas"
import { pumaArr } from "./Puma"


type SnickersType = {
    [adidas: string]: SnickersItem[]
    puma: SnickersItem[]
}
const snickers: SnickersType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = (props: any) => {
    const { firm, id } = useParams<{ firm: string, id: string }>();

    // const model = adidasArr.find(el => el.id === Number(params.id))


    const currentModel = firm
        ? snickers[firm].find(el => el.id === Number(id))
        : null

    return (
        <div>
            {currentModel
                ? <>
                    <h3>{currentModel.model}</h3>
                    <h4>{currentModel.collection}</h4>
                    <img src={currentModel.picture} alt="" />
                    <h5>{currentModel.price}</h5>
                </>
                : <h2>Такой модели не существует</h2>}
        </div>
    )
}


//@ts-ignore