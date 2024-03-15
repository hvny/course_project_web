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
import CustomBottomNavigation from "../BottomNavigation/CustomBottomNavigation";

import hachapuriImg from "../../images/hachapuri.jpg";
import medovikImg from "../../images/medovik.jpeg";
import PragueImg from "../../images/cake.jpg";
import potatoImg from "../../images/potato.jpg";
import milkshakeImg from "../../images/milkshake.jpg";

export default function App() {

  const bakeryItems = [
    {
      title: "Хачапури",
      image: hachapuriImg,
    },
  ];

  const dessertsItems = [
    {
      title: "Медовик",
      image: medovikImg,
    },
    {
      title: "Прага",
      image: PragueImg,
    },
    {
      title: "Пирожное «Картошка»",
      image: potatoImg,
    }
  ];

  const drinksItems = [
    {
      title: "Коктейль",
      image: milkshakeImg,
    }
  ];
  
  const eventsArr = [];


  return (
    <div className="page">
      <Header />
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
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

