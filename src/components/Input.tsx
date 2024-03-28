import { ChangeEvent } from "react"

type InputPropsType = {
    setValue: (title: string) => void
    title: string
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeHandler}/>
    )
}