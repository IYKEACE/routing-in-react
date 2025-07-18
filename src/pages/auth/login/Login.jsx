import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  // login handler function
  const loginHandler = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  );
};
export default Login;
