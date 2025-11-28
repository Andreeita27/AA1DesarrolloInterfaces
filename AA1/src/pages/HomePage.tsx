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
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los personajes");
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Personajes Rick y Morty</h1>
      
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input 
          type="text" 
          placeholder="Buscar personaje..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      
      {loading ? (
        <p style={{ textAlign: "center" }}>Buscando...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
          {characters.map((char) => (
            <div key={char.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "10px" }}>
              <img src={char.image} alt={char.name} style={{ width: "100%" }} />
              <h3>{char.name}</h3>
              <Link to={`/character/${char.id}`}>Ver detalle</Link>
            </div>
          ))}
        </div>
      )}
      
      {!loading && characters.length === 0 && (
        <p style={{ textAlign: "center" }}>No se encontraron personajes con ese nombre.</p>
      )}
    </div>
  );
}