import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "var(--highlight-color)",
        width: "100%"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
        }}
      >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          display: "flex",
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: isActive ? "#000000ff" : "white",
          textDecoration: "none"
        })}
      >
        Inicio
      </NavLink>
      <NavLink 
        to="/characters" 
        style={({ isActive }) => ({
          display: "flex",
          fontSize: "1.1rem",
          fontWeight: "bold",
            color: isActive ? "#000000ff" : "white",
            textDecoration: "none",
        })}
      >
          Personajes
        </NavLink>
      <NavLink
        to="/locations"
        style={({ isActive }) => ({
          display: "flex",
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: isActive ? "#000000ff" : "white",
            textDecoration: "none"
        })}
      >
        Ubicaciones
      </NavLink>
      <ThemeToggle />
    </div>
    </nav>
  );
}