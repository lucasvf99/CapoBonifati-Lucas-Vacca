import './../App.css'

function Button (props){
    console.log(props)
    return (
        <>
        <button className = 'button' onClick={props.callBack}>
            {props.label}
        </button></>
    )
}

export default Button