import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
