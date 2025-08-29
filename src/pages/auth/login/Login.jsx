import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/auth";
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login handler function
  const loginHandler = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={loginHandler}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.forgotRow}>
          <a href="#" className={styles.forgot}>
            Forgot password?
          </a>
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
