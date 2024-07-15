
'use client'

import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";

import classes from "./page.module.css";
import { login } from '@/lib/actions';
import Image from "next/image";
import logoImg from '@/assets/logo_muebles.png'

export default function Home() {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ... credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email" && !emailRegex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is not valid' }));
    } else if (name === "password" && !passwordRegex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters long and contain both letters and numbers' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.login_animation_container}>
          <div className="background-animation">
            <Image src={logoImg} className={classes.shop_logo} alt="furniture-logo" priority/>
            <h1 className={classes.shop_name}>Furniture Shop</h1>
          </div>
        </div>
  
        <div className={classes.login_form_container}>
          <div className="login-form">
            <h1>Login</h1>
            <form action={login}>
              <div className={classes.form_group}>
                <label htmlFor="email">User</label>
                <input type="email" id="email" name="email" required
                onBlur={handleBlur}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className={classes.form_group}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required
                onBlur={handleBlur}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className={classes.form_group}>
                <button type="submit" className={classes.button}>ENTER</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
  
  
  
}
