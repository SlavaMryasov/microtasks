
import { useParams } from "react-router-dom";
import { SnickersType } from "../../data/ArraysOfSnickers";


export const Snicker = ({ snickersArr }: { snickersArr: SnickersType }) => {

    const params = useParams()

    const firm = params.firm as keyof SnickersType;

    const model = snickersArr[firm].data.find(el => el.title === params.model)

    // const model = params.firm
    //     ? snickersArr[params.firm as keyof SnickersType].data.find(el => el.title === params.model)
    //     : null

    return (
        <div>
            {model
                ? <><h3>{model.title}</h3>
                    <img src={model.src} alt="" style={{ 'width': '500px' }} />
                    <p>{model?.description}</p></>
                : <h3>модель отсутствует</h3>}

        </div>
    );
};


// @ts-nocheck