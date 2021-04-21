import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BestPricesToTrade from "./components/BestPricesToTrade";
import Table from "./components/Table";
import Ad from "./components/Ad";
import Footer from "./components/Footer";
import Fixedfooter from "./components/Fixedfooter";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function handleToggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <div className={`App ${!darkTheme && "white__theme"}`}>
      <Header darkTheme={darkTheme} handleToggleTheme={handleToggleTheme} />
      <BestPricesToTrade darkTheme={darkTheme} />
      <Table darkTheme={darkTheme} />
      <Ad />
      <Footer />
      <Fixedfooter />
    </div>
  );
}

export default App;
