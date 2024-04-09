import "./Profile.css";

import { 
  Button, 
  Dialog,
  StyledEngineProvider
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { joiResolver } from "@hookform/resolvers/joi";
import userDataScheme from "../../utils/schemes/userDataScheme";

import AddressForm from "./AddressForm/AddressForm.jsx";
import { CssTextField } from "../../utils/constants/profileConstants.js";

export default function Profile({ user }) {
  const schema = [];
  const [isPopupOpen, setIsPopupOpen] = useState(false);      //попап добавления адреса

  //localStorage.clear();
  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver:  joiResolver(userDataScheme),
    defaultValues: {
      firstName: user ? user.firstName : "",
      phoneNumber: user ? user.phoneNumber : "",
      email: user ? user.email : "",
    },
  });

  function handlePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function userDataOnSubmit(data) {
    // localStorage.setItem("userName", data.firstName);
    // localStorage.setItem("email", data.email);
    // localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
  }

  return (
    <StyledEngineProvider injectFirst>
      <section className="profile">
          <h1 className="profile__title title">Профиль</h1>
          <div className="profile__content">
            <form 
              className="profile__form profile__container"
              onSubmit={handleSubmit(userDataOnSubmit)}
              // isvalid={isValid}
            >
              <h2 className="profile__subtitle">Ваши данные</h2>
              <CssTextField 
                id="outlined-basic" 
                className="profile__input"
                label="Имя" 
                title="Ваше имя"
                aria-label="Поле вввода для имени"
                {...register("firstName")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>

              <CssTextField 
                id="outlined-basic"
                className="profile__input"
                label="Номер телефона" 
                title="Ваш номер телефона"
                aria-label="Поле вввода для номера телефона"
                {...register("phoneNumber")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
              <CssTextField 
                id="outlined-basic"
                className="profile__input"
                label="E-mail" 
                title="Ваша электронная почта"
                aria-label="Поле вввода для электронной почты"
                {...register("email")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
              <Button 
                variant="outlined" 
                type="submit" 
                className="profile__button profile__button_submit"
              >
                Сохранить
              </Button>
            </form>
            <div className="profile__address-container profile__container">
              <h2 className="profile__subtitle profile__subtitle_address">Ваши адреса</h2>
              <Button variant="outlined" className="profile__button profile__button_add-address" onClick={handlePopup}>Добавить</Button>
              <Dialog
                open={isPopupOpen}
                onClose={handlePopup}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <DialogContent className="profile__address-dialog">
                  <AddressForm />
                </DialogContent>
              </Dialog>
            </div>
        </div>
      </section>
    </StyledEngineProvider>
  );
}