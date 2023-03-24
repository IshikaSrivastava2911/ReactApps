import { Card, FormControlLabel } from "@mui/material";
import { Buttons } from "../atoms/button/Button";
import { Dividers } from "../atoms/divider/Divider";
import { Heading } from "../atoms/headings/Heading";
import { Title } from "../atoms/headings/Title";
import Input from "../atoms/input/Input";
import { Label } from "../atoms/labels/Label";
import { Links } from "../atoms/links/Link";
import { Remember } from "../molecules/Remember";
import './SignIn.css';
import {GoogleIconBtn, GitHubIconBtn} from "../molecules/iconButtons/iconBtn";


export const SignIn=()=>{
    return(
        <Card variant="outlined" className="card">
            <Heading text="Sign In" />
            <Title text="Please Enter your login credentials" />
            <Label label="Email" />
            
            <Input type="email" placeHolder="Enter your email"/>
            <br/>
            <Label label="Password" />
            
            <Input type="password" placeHolder="Enter your password" />
            <br/>
            <span className="inline">
                <Remember /> 
                <Links text="Forgot Password?" href="xyz.com"/>
            </span>
            <br/> <br/>
            <Buttons label={"Sign In"} variant="contained" /> 
            <br/><br/>
            <Dividers label="or" />
            <br/><br/>
            <GoogleIconBtn label="Sign In with Google"/>
            <br /> 
            <GitHubIconBtn label="Sign In with Github"/>
            <br/>
            {/* <span className="inline-center">
            <Title text={"Don't have an account?"}>
            <Links text={"Sign Up"} href="signuppage" /> </Title>
            </span> */}
            <span className="TextLink">
            <FormControlLabel  label="Don't have an account?" control={<Links text={"Sign Up"} href="signuppage" />} labelPlacement="start"></FormControlLabel>
            </span>
        </Card>
    );
}