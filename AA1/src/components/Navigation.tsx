import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
          color: isActive ? "#000000ff" : "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem"
        })}
      >
        Inicio
      </NavLink>
      <NavLink 
        to="/characters" 
        style={({ isActive }) => ({
            color: isActive ? "#000000ff" : "white",
            textDecoration: "none", 
            fontWeight: "bold",
            fontSize: "1.1rem"
        })}
      >
          Personajes
        </NavLink>
      <NavLink
        to="/locations"
        style={({ isActive }) => ({
          color: isActive ? "#000000ff" : "white",
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