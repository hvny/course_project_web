import "./Profile.css";

import TextField from '@mui/material/TextField';
import { Button, StyledEngineProvider } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { joiResolver } from "@hookform/resolvers/joi";
import userDataScheme from "../../utils/schemes/userDataScheme";

import AddressForm from "./AddressForm/AddressForm.tsx";

import styled from "@mui/styled-engine";

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

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#663334',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#663334',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#663334',
      },
      '&:hover fieldset': {
        borderColor: '#663334',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#663334',
      },
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
  console.log("errors: ", errors);

  return (
    <StyledEngineProvider injectFirst>
      <section className="profile">
          <h1 className="profile__title title">Профиль</h1>
          <div className="profile__content">
            <form 
              className="profile__form profile__container"
              onSubmit={handleSubmit(userDataOnSubmit)}
              isValid={isValid}
              isDirty={isDirty}
            >
              <h2 className="profile__subtitle">Ваши данные</h2>
              <CssTextField 
                id="outlined-basic" 
                className="profile__input"
                label="Имя" 
                {...register("firstName")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>

              <CssTextField 
                id="outlined-basic"
                className="profile__input"
                label="Номер телефона" 
                {...register("phoneNumber")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
              <CssTextField 
                id="outlined-basic"
                className="profile__input"
                label="E-mail" 
                {...register("email")}
              />
              <span className={`profile__form-error ${!isValid && errors.name ? "profile__form-error_active" : ""}`}>{errors.name || ""}</span>
              <Button variant="outlined" type="submit" className="profile__button_submit">Сохранить</Button>
          </form>
          <div className="profile__address-container profile__container">
            <h2 className="profile__subtitle">Ваши адреса</h2>
            <Button variant="outlined" className="profile__button profile__button_add-address" onClick={handlePopup}>Добавить</Button>
            <Modal
              open={isPopupOpen}
              onClose={handlePopup}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <AddressForm />
              </Box>
            </Modal>
          </div>
        </div>
      </section>
    </StyledEngineProvider>
  );
}