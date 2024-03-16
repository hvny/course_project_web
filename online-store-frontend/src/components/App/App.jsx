import "../Link/Link.css";
import "./App.css";
import "../Main/Main.css";
import "../Title/Title.css";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Items from "../Items/Items";
import Events from "../Events/Events";
import Order from "../Order/Order";
import Delivery from "../Delivery/Delivery";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import CustomBottomNavigation from "../CustomBottomNavigation/CustomBottomNavigation";

import hachapuriImg from "../../images/hachapuri.jpg";
import medovikImg from "../../images/medovik.jpeg";
import PragueImg from "../../images/cake.jpg";
import potatoImg from "../../images/potato.jpg";
import milkshakeImg from "../../images/milkshake.jpg";

import {loremIpsumV1, loremIpsumV2, loremIpsumV3} from "../../utils/constants/test";

export default function App() {
  const location = useLocation().pathname;
  const [currentLocation, setCurrentLocation] = useState(location);

  console.log("location: ", location)

  const [itemsArr, setItemsArr] = useState([]);
  

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
      <CustomBottomNavigation currentLocation={currentLocation} />
      <Footer />
    </div>
  );
}

