import { Link } from 'react-router-dom';
import {Home} from "./Home";

export const Sobre = () => {
    return (
        <>
        <Home />
        <div>
            <h1>Sobre</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
        </>
    );
}
