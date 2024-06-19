import "./AuthForm.css";

import { useState } from "react";
import { useForm, Controller  } from "react-hook-form";

import { Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";

import RegForm from "./RegForm/RegForm";
import LoginForm from "./LoginForm/LoginForm";

import regScheme from "../../utils/schemes/RegScheme";
import loginScheme from "../../utils/schemes/loginScheme";
import { joiResolver } from "@hookform/resolvers/joi";

import { CssTextField } from "../../utils/constants/profileConstants";

export default function AuthForm() {
    const [isRegButtonClicked, setIsRegButtonClicked] = useState(true);
    const [isLoginButtonClicked, setIsLoginButtonClicked] = useState(false);

    const { handleSubmit, control, formState: {isValid, errors}, trigger } = useForm({
        resolver: joiResolver(isRegButtonClicked ? regScheme : loginScheme)
    });

    function regFormOnSubmit(data) {
        console.log("reg: ", data);
    };   

    function loginFormOnSubmit(data) {
        console.log("login: ", data);
    };   

    function handleRegButton() {
        setIsRegButtonClicked(true);
        setIsLoginButtonClicked(false);
    }

    function handleLoginButton() {
        setIsLoginButtonClicked(true);
        setIsRegButtonClicked(false);
    }

    return (
        <StyledEngineProvider injectFirst>
            <div className="auth-form">
                <ul className="auth-form__buttons-list">
                    <li className="auth-form__button-list-item">
                        <Button className={`auth-form__button auth-form__button_sign ${isRegButtonClicked ? "auth-form__button_active" : ""}`} onClick={handleRegButton} variant="text">Регистрация</Button>
                    </li>
                    <li className="auth-form__button-list-item">
                        <Button className={`auth-form__button auth-form__button_sign ${isLoginButtonClicked ? "auth-form__button_active" : ""}`} onClick={handleLoginButton} variant="text">Вход</Button>
                    </li>
                </ul>
                <div className="auth-form__form-container">
                    <h2 className="auth-form__title">{isRegButtonClicked ? "Добро пожаловать" : "Вход"}</h2>
                        {
                            isRegButtonClicked ?
                                <RegForm submitFunction={regFormOnSubmit}/>
                            :
                                <LoginForm submitFunction={loginFormOnSubmit} />
                        }
                </div>
            </div>
        </StyledEngineProvider>  
    );
}