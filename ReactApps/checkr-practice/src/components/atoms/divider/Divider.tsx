import { Divider } from "@mui/material"

interface DivideProp{
    label:string;
}
export const Dividers=({label}:DivideProp)=>{
    return(
        <Divider>
            {label}
        </Divider>
    )

}