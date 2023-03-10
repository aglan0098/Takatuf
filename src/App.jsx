import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CompanyRegister from "./pages/Register/CompanyRegister";
import Trainer from "./pages/Trainer/Trainer";
import Company from "./pages/Company/Company";
import Applications from "./pages/Company/Applications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainer-register" element={<Register />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/trainer-form" element={<Trainer />} />
        <Route path="/companies-form" element={<Company />} />
        <Route path="/trainers-applications" element={<Applications />} />
      </Routes>
    </>
  );
}

export default App;
