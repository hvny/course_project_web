import "../Link/Link.css";
import "./App.css";
import "../Main/Main.css";
import "../Title/Title.css";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Items from "../Items/Items";
import Events from "../Events/Events";
import Order from "../Order/Order";
import Delivery from "../Delivery/Delivery";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import CustomBottomNavigation from "../CustomBottomNavigation/CustomBottomNavigation";
import AuthForm from "../AuthForm/AuthForm";

import hachapuriImg from "../../images/hachapuri.jpg";
import medovikImg from "../../images/medovik.jpeg";
import PragueImg from "../../images/cake.jpg";
import potatoImg from "../../images/potato.jpg";
import milkshakeImg from "../../images/milkshake.jpg";
import eventImg from "../../images/eventExample.jpg";

import { 
  Button, 
  Dialog,
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';

import {loremIpsumV1, loremIpsumV2, loremIpsumV3} from "../../utils/constants/test";

import { getUserInfo } from "../../utils/api/services/user.service.ts";

export default function App() {
  const [itemsArr, setItemsArr] = useState([]);
  const [user, setUser] = useState({});
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserInfo();
    }
  })
    

  const bakeryItems = [
    {
      title: "Хачапури",
      image: hachapuriImg,
      composition: loremIpsumV1,
    },
  ];

  const dessertsItems = [
    {
      title: "Медовик",
      image: medovikImg,
      composition: loremIpsumV1,
    },
    {
      title: "Прага",
      image: PragueImg,
      composition: loremIpsumV2,
    },
    {
      title: "Пирожное «Картошка»",
      image: potatoImg,
      composition: loremIpsumV2,
    }
  ];

  const drinksItems = [
    {
      title: "Коктейль",
      image: milkshakeImg,
      composition: loremIpsumV3,
    }
  ];
  
  const eventsArr = [
    {
      title: "Акция1",
      image: eventImg,
      about: loremIpsumV2,
    },
    {
      title: "Акция2",
      image: eventImg,
      about:loremIpsumV3,
    },/*
    {
      title: "Акция2",
      image: eventImg,
      about:loremIpsumV3,
    },
    {
      title: "Акция2",
      image: eventImg,
      about:loremIpsumV3,
    }*/
  ];

  const [cartItems, setCartItems] = useState(dessertsItems);


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo) {
      setUser(userInfo);
    }
  }, []); 

  function handleOpenAuthPopup() {
    setIsAuthPopupOpen(!isAuthPopupOpen);
  }

  return (
    <div className="page">
      <Header tempCartItems={cartItems} handleOpenAuthPopup={handleOpenAuthPopup} />
      <main className="main">
        <Routes>
          <Route 
            path="/" 
            element={
              <Items
                bakeryItems={bakeryItems}
                dessertsItems={dessertsItems}
                drinksItems={drinksItems}
              />
            } 
          />
          <Route path="/events" element={<Events eventsArr={eventsArr} />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about-delivery" element={<Delivery />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Dialog
          open={isAuthPopupOpen}
          onClose={handleOpenAuthPopup}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <DialogContent style={{width:"300px", padding: 0, height: "450px"}}>
            <AuthForm />
          </DialogContent>
        </Dialog>
      </main>
      <CustomBottomNavigation />  
      <Footer />
    </div>
  );
}

