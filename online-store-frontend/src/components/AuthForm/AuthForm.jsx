import "./AuthForm.css";

import { useState, useEffect } from "react";
import { useForm, Controller  } from "react-hook-form";

import { Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";

import regScheme from "../../utils/schemes/RegScheme";
import { joiResolver } from "@hookform/resolvers/joi";

import { CssTextField } from "../../utils/constants/profileConstants";

export default function AuthForm() {
    const [isRegButtonClicked, setIsRegButtonClicked] = useState(true);
    const [isLoginButtonClicked, setIsLoginButtonClicked] = useState(false);

    const { register, handleSubmit, control, formState: {isValid, errors}, trigger } = useForm({
        resolver: joiResolver(regScheme)
    });

    function regFormOnSubmit(data) {
        console.log(data);
        console.log(errors);
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
                            <form onSubmit={handleSubmit(regFormOnSubmit)} className="auth-form__form auth-form__form_reg">
                                <Controller
                                    control={control}
                                    name="firstName"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <CssTextField
                                            className="auth-form__input"
                                            label="Имя"
                                            title="Имя"
                                            {...field}
                                            error={!!errors?.firstName}
                                            helperText={errors?.firstName?.message}
                                            onChange={(event) => {
                                                field.onChange(event);
                                                trigger("firstName").then(() => {
                                                    console.log("err: ", errors?.firstName);
                                                  });
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="phoneNumber"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <CssTextField
                                            className="auth-form__input"
                                            label="Номер телефона"
                                            title="Номер телефона"
                                            {...field}
                                            error={!!errors?.phoneNumber}
                                            helperText={errors?.phoneNumber?.message}
                                            onBlur={(event) => {
                                                field.onBlur(event);
                                                trigger("phoneNumber");
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="password"
                                    defaultValue=""
                                    render={({ field }) => (
                                        <CssTextField
                                            label="Пароль"
                                            title="Пароль"
                                            className="auth-form__input"
                                            {...field}
                                            error={!!errors?.password}
                                            helperText={errors?.password?.message}
                                            onBlur={(event) => {
                                                field.onBlur(event);
                                                trigger("password");
                                            }}
                                        />
                                    )}
                                />
                                <Button className="auth-form__button auth-form__button_submit" color="primary" variant="contained" type="submit" disabled={!isValid}>Отправить</Button>
                            </form>
                        :
                            <div className="auth-form__login">
                                Login
                            </div>
                    }
                </div>
                
            </div>
        </StyledEngineProvider>  
    );
}