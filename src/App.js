import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Offers from "./components/Offers";
import Payment from "./components/Payment";
import Merchant from "./components/Merchant";

const App = () =>  {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/offers" element={<Offers/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/offers/:offerId" element={<Merchant/>} />
      </Routes>
    </div>
  )
}

export default App;