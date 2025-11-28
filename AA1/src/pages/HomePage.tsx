import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import type { Character } from "../types";

export default function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los personajes");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: "center", padding: "50px", color: "white" }}>Cargando portal... 🌀</div>;
  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <div style={{ padding: "40px", backgroundColor: "#24282F", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>Personajes Rick y Morty</h1>
      
      {}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "20px" 
      }}>
        
        {characters.map((char) => (
          <div 
            key={char.id} 
            style={{ 
              backgroundColor: "#3C3E44", 
              borderRadius: "10px", 
              overflow: "hidden", 
              color: "white",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
            }}
          >
            {}
            <img 
              src={char.image} 
              alt={char.name} 
              style={{ width: "100%", height: "250px", objectFit: "cover" }} 
            />
            
            {}
            <div style={{ padding: "15px" }}>
              <h2 style={{ fontSize: "1.2rem", margin: "0 0 5px 0", color: "#FF9800" }}>
                {char.name}
              </h2>
              <p style={{ margin: 0, fontSize: "0.9rem" }}>
                {char.status === "Alive" ? "🟢" : char.status === "Dead" ? "🔴" : "⚪"} {char.status} - {char.species}
              </p>
              <p style={{ color: "#9E9E9E", fontSize: "0.8rem", marginTop: "10px" }}>
                Última ubicación:
              </p>
              <p style={{ margin: 0 }}>{char.location.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}