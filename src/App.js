import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import AppRouter from "./config/AppRouter";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
