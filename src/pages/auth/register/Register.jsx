import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <Link to="/auth/login">register</Link>
    </div>
  );
};
export default Register;
