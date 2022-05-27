import { NavLink } from 'react-router-dom';

export const Home = () =>{
  return (
    <div>
      <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <img alt="" src='' width="35"height="35"/>
                        <NavLink className="navbar-brand" to={"/sign-in"}>A Comida do Bebê</NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/sobre"}>Sign in</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/usuario"}>Sign up</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
    </div>
  );
}
