import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", 'true')
        navigate('/posts')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Username"/>
                <MyInput type="password" placeholder="Password"/>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
};

export default Login;