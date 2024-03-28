
type ButtonPropsType = {
    name: string,
    sendMessage: ()=>void
}

export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.sendMessage()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}