import "./AddressForm.css";

import React from "react";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { CssTextField } from "../../../utils/constants/profileConstants";
import { Select } from '@mui/material';

export default function AddressForm() {
    return (
        <form className="address-form">
            <h2 className="address-form__title title">Добавить адрес</h2>
            <CssTextField  
                id="outlined-basic"
                className="address-form__input address-form__input_city address-form__input_w-250"
                label="Город"
            />
            <CssTextField  
                id="outlined-basic"
                className="address-form__input address-form__input_street address-form__input_w-250"
                label="Улица"
            />
            <div className="address-form__input-container">
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_building address-form__input_w-120"
                    label="Дом"
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_entry address-form__input_w-120"
                    label="Подъезд"
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_floor address-form__input_w-120"
                    label="Этаж"
                />
                <CssTextField  
                    id="outlined-basic"
                    className="address-form__input address-form__input_apartment address-form__input_w-120"
                    label="Квартира"
                />
            </div>        
            <Button className="profile__button address-form__button_submit">Добавить</Button>
        </form>
    );
}