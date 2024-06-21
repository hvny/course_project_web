import "./Profile.css";

import { 
  Button, 
  Dialog,
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';

import { useForm, Controller  } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { joiResolver } from "@hookform/resolvers/joi";
import userDataScheme from "../../utils/schemes/RegScheme.js";

import DataTable from "../DataTable/DataTable.jsx";
import AddressForm from "./AddressForm/AddressForm.jsx";
import { CssTextField } from "../../utils/constants/profileConstants.js";



export default function Profile({ user }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);      //попап добавления адреса
  const [addressesArr, setAddressesArr] = useState([]);
  const navigate = useNavigate();
  // const tempAddress = { id: 1, city: "Киров", street: "Пушкина", house: 2, entry: 2, floor: 2, apartment: 2 };

  function handlePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhoneNumber");
    navigate("/");
    window.location.reload()
  }


  return (
    <section className="profile">
      <h1 className="profile__title title">Профиль</h1>
      <div className="profile__content">
        <form 
          className="profile__form profile__container"
          // isvalid={isValid}
        >
          <h2 className="profile__subtitle">Ваши данные</h2>
          <CssTextField 
            id="outlined-basic" 
            className="profile__input"
            label="Имя" 
            title="Ваше имя"
            aria-label="Поле вввода для имени"
            defaultValue={localStorage.getItem("userName")}
            disabled
            // {...register("firstName")}
          />
          <CssTextField 
            id="outlined-basic"
            className="profile__input"
            label="Номер телефона" 
            title="Ваш номер телефона"
            aria-label="Поле вввода для номера телефона"
            defaultValue={localStorage.getItem("userPhoneNumber")}
            disabled
            // {...register("phoneNumber")}
          />
          <Button className="profile__button" onClick={logout}>Выйти</Button>
        </form>
        
        {/* <div className="profile__address-container profile__container">
          <h2 className="profile__subtitle profile__subtitle_address">Ваши адреса</h2>
          {
            addressesArr.length == 0 ? 
            <DataTable />
            :
            <></>
          }
          <Button variant="outlined" className="profile__button profile__button_add-address" onClick={handlePopup}>Добавить</Button>
          <Dialog
            open={isPopupOpen}
            onClose={handlePopup}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <DialogContent className="profile__address-dialog">
              <AddressForm title="Добавить адрес" buttonText="Добавить" />
            </DialogContent>
          </Dialog>
        </div>*/}
      </div> 
    </section>
  );
}