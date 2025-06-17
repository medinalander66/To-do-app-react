
export default function Button({text = "Empty text", action,className, type, disabled}){
    return(
        <button type={type}
        disabled={disabled}   
        className={className}
        onClick={action}>
            {text}
        </button>
    )
}