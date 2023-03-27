
interface InputPros{
    type: "text" | "number" | "password" | "email";
    class?: string;
    placeHolder? : string;
}

const Input =({
type,
placeHolder,
...props
}:InputPros)=>{
    return(
    <input type={type} placeholder={placeHolder} >
    </input>
    );
}
export default Input;