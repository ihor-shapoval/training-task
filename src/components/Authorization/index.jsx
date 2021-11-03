import { useState } from "react";
//constants
import USER from "../../core/constants/constants";
//styles
import "./Authorization.module.scss";

const Authorization = ({setIsLoggedIn}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.trim() === USER.username && password.trim() === USER.password) {
      setIsLoggedIn(true);
      setError(false);
    }

    setError(true);
    setLogin("");
    setPassword("");
  };

  const nameHandleChange = (event) => setLogin(event.target.value);
  const passwordHandleChange = (event) => setPassword(event.target.value);

  return (
    <>
    <form method="POST" onSubmit={handleSubmit}>
      <h1>LogIn</h1>
      <input
        type="text"
        value={login}
        placeholder="Enter your name"
        onChange={nameHandleChange}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={passwordHandleChange}
      />
          <button type="submit">LogIn</button>
    </form>
    {error && 'Try again'}
    </>
  );
};

export default Authorization;
