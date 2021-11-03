import { NavLink } from "react-router-dom";
//styles
import "./Home.module.scss";

const Home = ({isLoggedIn}) => {
  return (
    <div className="App">
      <h2>Home</h2>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/cats">Cute cats</NavLink>
          <NavLink to="/calc">Calculating</NavLink>
          {!isLoggedIn && <NavLink to="/auth">LogIn</NavLink>}
        </ul>
      </nav>
    </div>
  );
}

export default Home;