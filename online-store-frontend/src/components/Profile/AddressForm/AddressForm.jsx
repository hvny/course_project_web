import "./AddressForm.css";

import React from "react";

import userAddressScheme from "../../../utils/schemes/userAddressScheme";

import { useForm, Controller  } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import { CssTextField } from "../../../utils/constants/profileConstants";
import { Select } from '@mui/material';

import { addAddress, editAddress, getUserInfo } from "../../../utils/api/services/user.service.ts";

export default function AddressForm({ title, buttonText, addressData }) {

    const { handleSubmit, control, formState: {isValid, errors}, trigger } = useForm({
        resolver: joiResolver(userAddressScheme)
    });

    async function submitFunction(data) {
        console.log(data)
        if (addressData) {
            console.log("edit");
        } else {
            console.log("add");
            const response = await addAddress();
            console.log(response);
            getUserInfo();
        }
    }

    return (
        <form onSubmit={handleSubmit(submitFunction)} className="address-form">
            <h2 className="address-form__title title">{title}</h2>
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="city"
                    defaultValue={addressData ? addressData.city : ""}
                    className="address-form__controller"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_city address-form__input_w-250"
                            label="Город"
                            title="Город"
                            {...field}
                            error={!!errors?.city}
                            helperText={errors?.city?.message}
                            onChange={(event) => {
                                field.onChange(event);
                                trigger("city");
                            }}
                        />
                    )}
                />
            </div>
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="street"
                    defaultValue={addressData ? addressData.street : ""}
                    className="auth-form__controller"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_street address-form__input_w-250"
                            label="Улица"
                            title="Улица"
                            {...field}
                            error={!!errors?.street}
                            helperText={errors?.street?.message}
                            onBlur={(event) => {
                                field.onBlur(event);
                                trigger("street");
                            }}
                        />
                    )}
                />
            </div>
            <div className="address-form__input-container">
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="houseNumber"
                    defaultValue={addressData ? addressData.houseNumber : ""}
                    className="address-form__controller"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_building address-form__input_w-120"
                            label="Дом"
                            title="Дом"
                            {...field}
                            error={!!errors?.houseNumber}
                            helperText={errors?.houseNumber?.message}
                            onBlur={(event) => {
                                field.onBlur(event);
                                trigger("houseNumber");
                            }}
                        />
                    )}
                />
            </div>
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="entry"
                    defaultValue={addressData ? addressData.entry : ""}
                    className="address-form__controller"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_entry address-form__input_w-120"
                            label="Подъезд"
                            title="Подъезд"
                            {...field}
                            error={!!errors?.entry}
                            helperText={errors?.entry?.message}
                            onBlur={(event) => {
                                field.onBlur(event);
                                trigger("entry");
                            }}
                        />
                    )}
                />
            </div>
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="floor"
                    defaultValue={addressData ? addressData.floor : ""}
                    className="address-form__input address-form__input_floor address-form__input_w-120"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_building address-form__input_w-120"
                            label="Этаж"
                            title="Этаж"
                            {...field}
                            error={!!errors?.floor}
                            helperText={errors?.floor?.message}
                            onBlur={(event) => {
                                field.onBlur(event);
                                trigger("floor");
                            }}
                        />
                    )}
                />
            </div>
            <div className="address-form__form-item">
                <Controller
                    control={control}
                    name="apartment"
                    defaultValue={addressData ? addressData.apartment : ""}
                    className="address-form__input address-form__input_floor address-form__input_w-120"
                    render={({ field }) => (
                        <CssTextField
                            className="address-form__input address-form__input_building address-form__input_w-120"
                            label="Квартира"
                            title="Квартира"
                            {...field}
                            error={!!errors?.apartment}
                            helperText={errors?.apartment?.message}
                            onBlur={(event) => {
                                field.onBlur(event);
                                trigger("apartment");
                            }}
                        />
                    )}
                />
            </div>
            </div>
            <Button className="profile__button address-form__button_submit" color="primary" variant="contained" type="submit" disabled={!isValid}>{buttonText}</Button>
        </form>
        
    );
}

/* <form className="address-form">
            <h2 className="address-form__title title">{title}</h2>
            <CssTextField  
                id="outlined-basic"
                className="address-form__input address-form__input_city address-form__input_w-250"
                label="Город"
                defaultValue={addressData ? addressData.city : ""}
            />
            <CssTextField  
                id="outlined-basic"
                className="address-form__input address-form__input_street address-form__input_w-250"
                label="Улица"
                defaultValue={addressData ? addressData.street : ""}

            />
            <div className="address-form__input-container">
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_building address-form__input_w-120"
                    label="Дом"
                    defaultValue={addressData ? addressData.house : ""}
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_entry address-form__input_w-120"
                    label="Подъезд"
                    defaultValue={addressData ? addressData.entry : ""}
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_floor address-form__input_w-120"
                    label="Этаж"
                    defaultValue={addressData ? addressData.floor : ""}
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_apartment address-form__input_w-120"
                    label="Квартира"
                    defaultValue={addressData ? addressData.apartment : ""}
                />
            </div>        
            <Button className="profile__button address-form__button_submit">{buttonText}</Button>
        </form> */