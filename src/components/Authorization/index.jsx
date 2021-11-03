import { useState } from "react";
//constants
import USER from "../../core/constants/constants";
//styles
import styles from "./Authorization.module.scss";

const Authorization = ({setIsLoggedIn}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.trim() === USER.username && password.trim() === USER.password) {
      setIsLoggedIn(true);
    }

    setLogin("");
    setPassword("");
  };

  const nameHandleChange = (event) => setLogin(event.target.value);
  const passwordHandleChange = (event) => setPassword(event.target.value);

  return (
    <>
    <h1>Please use test data: login: Chris; password: 111111</h1>
    <form method="POST" onSubmit={handleSubmit} className={styles.form}>
      <h2>LogIn</h2>
      <input
        type="text"
        value={login}
        placeholder="Enter your name"
        onChange={nameHandleChange}
        className={styles.form__input}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={passwordHandleChange}
        className={styles.form__input}
      />
          <button type="submit" className={styles.form__submit}>LogIn</button>
    </form>
    </>
  );
};

export default Authorization;
