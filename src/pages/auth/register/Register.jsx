import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";

const defaultProfile =
  "https://cdn.pixabay.com/photo/2020/06/29/20/31/man-5354308_1280.png";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    role: "",
    profile: defaultProfile,
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Register</h1>
        <div className={styles.profilePicWrap}>
          <img src={form.profile} alt="Profile" className={styles.profilePic} />
        </div>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              className={styles.input}
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Role</label>
          <input
            className={styles.input}
            type="text"
            name="role"
            placeholder="e.g. Frontend, Backend, UI/UX"
            value={form.role}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Address</label>
          <input
            className={styles.input}
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
