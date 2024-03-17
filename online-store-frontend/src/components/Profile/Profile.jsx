import "./Profile.css";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useForm } from "react-hook-form";
import { useState } from "react";

import { joiResolver } from "@hookform/resolvers/joi";
import userDataScheme from "../../utils/schemes/userDataScheme";

import AddressForm from "./AddressForm/AddressForm.tsx";

export default function Profile() {
  const schema = [];
  const [isPopupOpen, setIsPopupOpen] = useState(false);      //попап добавления адреса

  const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
    resolver:  joiResolver(userDataScheme),
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      email: "",
    },
  });

  function handlePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function userDataOnSubmit(data) {
    console.log(data);
  }

  return (
    <section className="profile">
        <h1 className="profile__title title">Профиль</h1>
        <div className="profile__content">
          <form 
            className="profile__form profile__container"
            onSubmit={handleSubmit(userDataOnSubmit)}
          >
            <h2 className="profile__subtitle">Ваши данные</h2>
            <TextField 
              id="outlined-basic" 
              label="Имя" 
              {...register("firstName")}
            />
            <TextField 
              id="outlined-basic" 
              label="Номер телефона" 
              {...register("phoneNumber")}
            />
            <TextField 
              id="outlined-basic" 
              label="E-mail" 
              {...register("email")}
            />
            <Button variant="contained" type="submit">Сохранить</Button>
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
  );
}