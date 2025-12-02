import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ 
      padding: "40px", 
      backgroundColor: "var(--bg-color)", 
      minHeight: "calc(100vh - 200px)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "3rem", color: "var(--highlight-color)", marginBottom: "20px" }}>
        Bienvenido
      </h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text-color)", maxWidth: "600px", marginBottom: "40px" }}>
        Explora el universo de Rick y Morty.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/characters" style={{
          padding: "20px 40px",
          backgroundColor: "var(--card-bg)",
          border: "2px solid var(--accent-color)",
          borderRadius: "15px",
          textDecoration: "none",
          color: "var(--text-color)",
          fontWeight: "bold",
          fontSize: "1.2rem",
          transition: "transform 0.2s",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          👽 Ver Personajes
        </Link>

        <Link to="/locations" style={{
          padding: "20px 40px",
          backgroundColor: "var(--card-bg)",
          border: "2px solid var(--highlight-color)",
          borderRadius: "15px",
          textDecoration: "none",
          color: "var(--text-color)",
          fontWeight: "bold",
          fontSize: "1.2rem",
          transition: "transform 0.2s",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          🪐 Ver Ubicaciones
        </Link>
      </div>
    </div>
  );
}