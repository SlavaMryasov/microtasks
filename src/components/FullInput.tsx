import { ChangeEvent, useState } from "react"


type AddMessagePropsType = {
    addMessage: (title: string)=> void
}

export const FullInput: React.FC<AddMessagePropsType> = (props) => {

    let [title, setTitle] = useState('')

    let onChangeInput =(event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    let sendTitle = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
        <input value={title} onChange={onChangeInput}/>
        <button onClick={sendTitle}>+</button>
      </div>
    )
}