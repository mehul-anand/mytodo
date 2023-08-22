import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#846eee" : "black",
      textDecoration: "none",
      margin: "1rem"
    };
  };
  return (
    <div>
      <nav>
        <NavLink style={navLinkStyle} to="/">
          All Tasks
        </NavLink>
        <NavLink style={navLinkStyle} to="/open">
          Open Tasks
        </NavLink>
        <NavLink style={navLinkStyle} to="/closed">
          Completed Tasks
        </NavLink>
      </nav>
    </div>
  );
};
