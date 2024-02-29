import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Events from "../Events/Events";
import AboutUs from "../AboutUs/AboutUs";

import "../Link/Link.css"
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

