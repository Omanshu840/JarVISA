import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Merchant from "./components/Merchant";
import Payment from "./components/Payment";

const App = () =>  {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/merchant" element={<Merchant/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </div>
  )
}

export default App;