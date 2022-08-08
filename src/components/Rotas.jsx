import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./Header";
import { Home } from "./Home";
import { Signin } from "./Signin";
import { Signup } from "./Signup";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
