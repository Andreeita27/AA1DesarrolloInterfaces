import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../services/api";
import type { Character } from "../types";

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    getCharacters(1, searchTerm)
      .then((data) => {
        setCharacters(data.results || []); 
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("Error al cargar los personajes");
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div style={{ padding: "40px", backgroundColor: "var(--bg-color)", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "var(--highlight-color)", marginBottom: "30px", fontSize: "2.5rem" }}>
        Personajes Rick y Morty
      </h1>
      
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <input 
          type="text" 
          placeholder="Buscar personaje..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "50px", 
            border: "2px solid var(--accent-color)", 
            backgroundColor: "var(--card-bg)",
            color: "var(--text-color)",
            outline: "none",
            textAlign: "center"
          }}
        />
      </div>

      {loading && <p style={{ textAlign: "center", fontSize: "1.2rem", color: "var(--text-color)" }}>Cargando...</p>}
      
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && characters.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ fontSize: "1.5rem", color: "var(--text-color)" }}>
                No se encontró a nadie.
            </p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "30px" }}>
        {characters.map((char) => (
          <div 
            key={char.id} 
            style={{ 
              backgroundColor: "var(--card-bg)", 
              borderRadius: "20px", 
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
              border: "1px solid var(--border-color)",
              textAlign: "center" 
            }}
          >
            <img 
              src={char.image} 
              alt={char.name} 
              style={{ 
                width: "140px", 
                height: "140px", 
                borderRadius: "50%", 
                objectFit: "cover", 
                marginBottom: "15px",
                border: "4px solid var(--accent-color)" 
              }} 
            />
            
            <h2 style={{ fontSize: "1.3rem", margin: "0 0 10px 0", color: "var(--text-color)" }}>
                {char.name}
            </h2>
            <p style={{ margin: "0 0 20px 0", fontSize: "0.95rem", color: "#666" }}>
              {char.status === "Alive" ? "🟢" : char.status === "Dead" ? "🔴" : "⚪"} {char.species}
            </p>
            
            <Link to={`/character/${char.id}`} style={{ 
              display: "inline-block", 
              backgroundColor: "var(--highlight-color)", 
              color: "white", 
              fontWeight: "bold", 
              textDecoration: "none",
              padding: "10px 24px",
              borderRadius: "50px" 
            }}>
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}