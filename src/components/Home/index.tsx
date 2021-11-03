import {memo, FC} from 'react';
import { NavLink } from "react-router-dom";
//styles
import styles from "./Home.module.scss";

type HomeProps = {
  isLoggedIn: boolean;
}


const Home: FC<HomeProps> = ({isLoggedIn}) => {
  return (
    <div className={styles.container}>
      <h1>LogIn to get access to Calculating</h1>
      <nav>
        <ul className ={styles.navigation}>
          <div className={styles.wrapper}>
            <NavLink to="/" className={styles.link}>Home</NavLink>
            <NavLink to="/news" className={styles.link}>News</NavLink>
            <NavLink to="/guard" className={styles.link}>Guard</NavLink>
          </div>
          {!isLoggedIn && <NavLink to="/auth" className={styles.link}>LogIn</NavLink>}
        </ul>
      </nav>
    </div>
  );
}

export default memo(Home);