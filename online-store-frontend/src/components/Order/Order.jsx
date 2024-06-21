import "./Order.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Dialog } from "@mui/material";
import { CssTextField } from "../../utils/constants/profileConstants";

//import ItemCardSmall from "../ItemCardSmall/ItemCardSmall";

import { useForm, Controller  } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import DialogContent from '@mui/material/DialogContent';

import userAddressScheme from "../../utils/schemes/userAddressScheme";

export default function Order({ cartItems, setCartItems }) {
    const [addressArr, setAddressArr] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate();
    const { handleSubmit, control, formState: {isValid, errors}, trigger } = useForm({
        resolver: joiResolver(userAddressScheme)
    });

    useEffect(() => {
        redirect();
    }, []);

    async function submitFunction(data) {
        /* console.log(data)
        if (addressData) {
            console.log("edit");
        } else {
            console.log("add");
            const response = await addAddress();
            console.log(response);
            getUserInfo();
        } */
    }

    function createOrder() {
        setCartItems([]);
        handlePopup();
    }

    function handlePopup() {
        setIsPopupOpen(!isPopupOpen);
    }

    function redirect() {
        if (cartItems.length < 1) {
            navigate("/");
        }
    }

    return (
        <section className="order">
            <h1 className="title order__title">Оформление заказа</h1>
            <div className="order__container">  
               {/*  <ul className="order__items-list">
                    { {
                        itemsArr.map((item) => (
                            
                        ))
                    } }
                </ul> */}
                <div className="order__address-container">
                    <form onSubmit={handleSubmit(submitFunction)} className="address-form">
                        <h2 className="address-form__title title">Введите адрес</h2>
                        <div className="address-form__form-item">
                            <Controller
                                control={control}
                                name="city"
                                defaultValue=""
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
                                defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
            <Button className="profile__button address-form__button_submit order__button" color="primary" variant="contained" type="submit" disabled={!isValid} onClick={createOrder}>Оформить заказ</Button>
                </form>
                </div>
                <Dialog
                    open={isPopupOpen}
                    onClose={handlePopup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DialogContent className="order__dialog">
                        <h2 className="order__dialog-title">Заказ успешно оформлен</h2>
                        <h3 className="order__dialog-subtitle">Вам перезвонит оператор в течение 5 минут</h3>
                    </DialogContent>
              </Dialog>
            </div>
        </section>
    );
}