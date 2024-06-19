import { useForm, Controller  } from "react-hook-form";
import { Button } from "@mui/material";

import regScheme from "../../../utils/schemes/RegScheme";
import { joiResolver } from "@hookform/resolvers/joi";
import { CssTextField } from "../../../utils/constants/profileConstants";


export default function RegForm({ submitFunction }) {
    const { handleSubmit, control, formState: {isValid, errors}, trigger } = useForm({
        resolver: joiResolver(regScheme)
    });

    return (
        <form onSubmit={handleSubmit(submitFunction)} className="auth-form__form auth-form__form_reg">
            <div className="auth-form__form-item">
                <Controller
                    control={control}
                    name="firstName"
                    defaultValue=""
                    className="auth-form__controller"
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
                                trigger("firstName");
                            }}
                        />
                    )}
                />
            </div>
            <div className="auth-form__form-item">
                <Controller
                    control={control}
                    name="phoneNumber"
                    defaultValue=""
                    className="auth-form__controller"
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
            </div>
            <div className="auth-form__form-item">
                <Controller
                    control={control}
                    name="password"
                    defaultValue=""
                    className="auth-form__controller"
                    render={({ field }) => (
                        <CssTextField
                            className="auth-form__input"
                            label="Пароль"
                            title="Пароль"
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
            </div>
            <Button className="auth-form__button auth-form__button_submit" color="primary" variant="contained" type="submit" disabled={!isValid}>Отправить</Button>
        </form>
    );
}