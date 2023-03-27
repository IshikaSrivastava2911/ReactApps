
interface InputPros{
    type: "checkbox";
    class?: string;
    text? : string;
}

const CheckBox =({
type,
text,
...props
}:InputPros)=>{
    return(
    <div><input type={type} />{text}</div>
   
    );
}
export default CheckBox;