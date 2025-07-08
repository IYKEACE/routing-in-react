import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashbaord</h1>
      <p>Welcome to your dashboard</p>

      <div>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/">Logout</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
