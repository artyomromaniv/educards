import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/Register.module.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {

    const payload = {
      email: "romaniv.artyom8@gmail.com",
      password: "yakudza5854688",
      rememberMe: true
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div className={s.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>register</button>
    </div>
  );

};

