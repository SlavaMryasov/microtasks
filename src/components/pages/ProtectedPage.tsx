import { useContext } from "react"
import { ModelCrossContext } from "../../context/ModelProvider"


export const ProtectedPage = () => {
    const{setModel}=useContext(ModelCrossContext)

    const hideHandle=()=>{
        setModel('hide')
    }

    const buyHandle=()=>{
        setModel(null)
    }
    return(
        <div>
            protected page
            <div>
                <button onClick={hideHandle}> СРОЧНО Спрятать контрафактный товар</button>
                <button onClick={buyHandle}> ВЫСТАВИТЬ на продажу контрафактный товар</button>
            </div>
        </div>
    )
}