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

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Personajes</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {characters.map((char) => (
          <li key={char.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
            <strong>{char.name}</strong> - {char.species}
          </li>
        ))}
      </ul>
    </div>
  );
}