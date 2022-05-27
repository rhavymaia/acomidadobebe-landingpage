import { Routes, Route, BrowserRouter } from "react-router-dom";

import {Home} from "./Home";
import {Sobre} from "./Sobre";
import {Usuario} from "./Usuario";

export const Rotas = () => {
   return(
       <BrowserRouter>
           <Routes>
            <Route element = { <Home /> } path="/" exact />
            <Route element = { <Sobre /> }  path="/sobre" />
            <Route element = { <Usuario /> }  path="/usuario" />
           </Routes>
       </BrowserRouter>
   )
}