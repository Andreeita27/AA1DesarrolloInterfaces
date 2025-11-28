import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#00ff62ff",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#ffffffff" : "black",
          textDecoration: "none",
        })}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/locations"
        style={({ isActive }) => ({
          color: isActive ? "#ffffffff" : "black",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem"
        })}
      >
        Ubicaciones
      </NavLink>
    </nav>
  );
}