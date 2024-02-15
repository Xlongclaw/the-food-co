import React from "react";
import { Logo } from "../components/navbar-elements";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
import {BsApple} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"

const Login: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="absolute top-8 left-8">
        <Logo />
      </div>
      <img className="w-[30rem] blur-[3px] absolute -z-10 bottom-0 left-0" src="images/loginbg2.jpg" alt="" />
      <div className="shadow1 flex flex-col p-8 gap-4">
        <div className="flex justify-between">
        <h4 className="bold-font text-color1 text-3xl">Sign in</h4>
        <button onClick={()=>{navigate("/")}}>HOME</button>
        </div>
        <TextField className="w-[24rem]" label="Phone" type="number" variant="outlined"/>
        <TextField label="Password" type="password" variant="outlined"/>
        <button>Continue</button>
        <Link to={""}>New User? Register</Link>
        <button className="border-[1px] border-color1/40 py-3 flex justify-center items-center gap-2"><FcGoogle size={24}/>Sign in with Google</button>

        <button className="border-[1px] border-color1/40 py-3 flex items-center justify-center gap-2"><FaFacebookF size={24} color="#2190ff"/>Sign in with Facebook</button>
        <button className="border-[1px] border-color1/40 py-3 flex items-center justify-center gap-2"><BsApple size={24}/>Sign in with Apple</button>
      </div>
    </div>
  );
};

export default Login;
