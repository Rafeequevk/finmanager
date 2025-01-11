import "./App.css";
import { Router,Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Header from "./assets/Header";
import Budget from "./assets/Budget";
import Expense from "./assets/Expense";
import Income from "./assets/Income";

function App() {
  return (

      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/income" element={<Income/>}/>

        </Routes>
      
      </div>
  
  );
}

export default App;
