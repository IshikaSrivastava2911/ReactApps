import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import './iconBtn.css'

interface iconbtnprop{
    label?:string;
}

export const GoogleIconBtn=({label}:iconbtnprop)=>{
    return(
        <Button variant="outlined" startIcon={<Google />} className="btn" onClick={() => {alert('Google SignIn Page');}}  style={{color: "#000000 "}}>{label}</Button>
    );
}
export const GitHubIconBtn=({label}:iconbtnprop)=>{
    return(
        <Button variant="outlined" startIcon={<GitHubIcon />} className="btn" onClick={() => {alert('Github SignIn Page');}} style={{color: "#000000 "}}>{label}</Button>
    );
}