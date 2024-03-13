import "../Link/Link.css";
import "./App.css";
import "../Main/Main.css";
import "../Title/Title.css";

import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Items from "../Items/Items";
import Events from "../Events/Events";
import Order from "../Order/Order";
import Delivery from "../Delivery/Delivery";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import CustomBottomNavigation from "../BottomNavigation/CustomBottomNavigation";


export default function App() {
  
  const eventsArr = [];

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Items />} />
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

