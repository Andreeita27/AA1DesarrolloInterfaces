import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#202329",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#FF9800" : "white",
          textDecoration: "none",
        })}
      >
        Inicio
      </NavLink>
    </nav>
  );
}