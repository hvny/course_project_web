import "./AddressForm.css";

import React from "react";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function AddressForm() {
    return (
        <form className="address-form">
            <TextField  
                id="outlined-basic" 
                label="Город"  
            />
            <TextField  
                id="outlined-basic" 
                label="Улица"  
            />
            <TextField  
                id="outlined-basic" 
                label="Дом"  
            />
            <TextField  
                id="outlined-basic" 
                label="Подъезд"  
            />
            <TextField  
                id="outlined-basic" 
                label="Этаж"  
            />
            <TextField  
                id="outlined-basic" 
                label="Квартира"  
            />
            <Button>Добавить</Button>
        </form>
    );
}