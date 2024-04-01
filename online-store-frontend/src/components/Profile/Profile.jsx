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

  // const CssTextField = styled(<TextField/>)({
  //   root: {
  //     '& label': {
  //       color: 'red',
  //     },
  //     '& label.Mui-focused': {
  //       color: 'white',
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: 'yellow',
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //         borderColor: 'white',
  //       },
  //       '&:hover fieldset': {
  //         borderColor: 'white',
  //       },
  //       '&.Mui-focused fieldset': {
  //         borderColor: 'yellow',
  //       },
  //     },
  //   },
  // })(TextField);

  return (
    <StyledEngineProvider injectFirst>
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
                // className="profile__input"
                label="Имя" 
                sx={{
                  backgroundColor: '#ffd60a',
                  border: '3px solid #001d3d',
                }}
                InputLabelProps={{
                  sx: {
                    color: '#003566',
                    textTransform: 'capitalize',
                  },
                }}
                InputProps={{
                  sx: {
                    '&:hover fieldset': {
                      border: '2px solid blue!important',
                      borderRadius: 0,
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid red!important',
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    color: 'red',
                    paddingLeft: '15px',
                    fontSize: '20px',
                  },
                }}
                {...register("firstName")}
              />
              <TextField 
                id="outlined-basic"
                className="profile__input"
                label="Номер телефона" 
                {...register("phoneNumber")}
              />
              <TextField 
                id="outlined-basic"
                className="profile__input"
                label="E-mail" 
                {...register("email")}
              />
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