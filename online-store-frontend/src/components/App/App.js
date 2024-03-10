import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Events from "../Events/Events";
import Order from "../Order/Order";
import Delivery from "../Delivery/Delivery";
import Footer from "../Footer/Footer";
import CustomBottomNavigation from "../BottomNavigation/CustomBottomNavigation";
import "../Link/Link.css"
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about-delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </div>
  );
}

