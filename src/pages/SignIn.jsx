// import React, { useEffect, useState } from "react";
// import MyInput from "../components/myInput";
// import MyButton from "../components/MyButton";
// import { useNavigate } from "react-router-dom";
//
// const SignIn = () => {
//   const navigate = useNavigate();
//   const [isAuth, setIsAuth] = useState(false);
//
//   const localStorageToken = localStorage.getItem("isAuth");
//   const handleSignIn = () => {
//     localStorage.setItem("isAuth", "true");
//     setIsAuth(true);
//     navigate("/posts"); // Перенаправляем на /posts после успешного входа
//   };
//
//   useEffect(() => {
//     if (localStorageToken === "true") {
//       navigate("/signin");
//     }
//   }, []);
//
//   return (
//     <div>
//       <h1>Страница для авторизации</h1>
//       <form>
//         <MyInput type="text" placeholder="Введите имя пользователя" />
//         <MyInput type="password" placeholder="Введите пароль" />
//         <MyButton onClick={handleSignIn}>Войти</MyButton>
//       </form>
//     </div>
//   );
// };
// export default SignIn;

import React, { useState } from "react";
import MyInput from "../components/myInput";
import MyButton from "../components/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { selectAuthState, setAuthenticated } from "../store/reducers/authSlice";

const users1 = {
  login: "1",
  password: "2",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectAuthState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (username === users1.login && password === users1.password) {
      navigate("/posts");
    }
  };
  const handleSignIn = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/users?username=${username}&password=${password}`,
      );
      const user = response.data[0];

      if (user) {
        localStorage.setItem("isAuth", "true");
        dispatch(setAuthenticated());
        navigate("/posts"); // Перенаправляем на /posts после успешного входа
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  if (isAuthenticated) {
    navigate("/posts"); // Перенаправляем пользователя, если он уже аутентифицирован
  }

  return (
    <div>
      <h1>Страница для авторизации</h1>
      <form>
        <MyInput
          type="text"
          placeholder="Введите имя пользователя"
          onChange={(e) => setUsername(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton onClick={handleSignIn}>Войти</MyButton>
      </form>
    </div>
  );
};

export default SignIn;
