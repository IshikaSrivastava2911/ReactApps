import { TextField } from "@mui/material";

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
    // <input type={type} placeholder={placeHolder} >
    // </input>
    <TextField type={type} placeholder ={placeHolder} variant="outlined"/>
    );
}
export default Input;