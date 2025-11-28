import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterById } from "../services/api";
import type { Character } from "../types";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getCharacterById(id)
        .then((data) => {
          setCharacter(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div style={{ textAlign: "center", marginTop: "50px" }}>Cargando...</div>;
  if (!character) return <div style={{ textAlign: "center" }}>Personaje no encontrado</div>;

  return (
    <div style={{ 
      padding: "40px", 
      backgroundColor: "var(--bg-color)", 
      minHeight: "100vh", 
      fontFamily: "Segoe UI, sans-serif" 
    }}>
      
      <div style={{ 
          maxWidth: "700px", 
          margin: "0 auto", 
          backgroundColor: "var(--card-bg)", 
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
          border: "1px solid var(--border-color)",
          textAlign: "center"
      }}>
        
        <img 
          src={character.image} 
          alt={character.name} 
          style={{ 
            width: "250px", 
            height: "250px", 
            borderRadius: "50%",
            objectFit: "cover", 
            border: "5px solid var(--accent-color)",
            marginBottom: "20px"
          }} 
        />

        <h1 style={{ 
            fontSize: "2.5rem", 
            color: "var(--accent-color)", 
            margin: "0 0 30px 0",
        }}>
            {character.name}
        </h1>
          
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "20px",
            marginBottom: "40px",
            textAlign: "left",
            backgroundColor: "rgba(0,0,0,0.05)",
            padding: "20px",
            borderRadius: "10px"
        }}>
            <p style={{ margin: "5px 0" }}><strong>Estado:</strong> {character.status === "Alive" ? "🟢 Vivo" : "🔴 Muerto"}</p>
            <p style={{ margin: "5px 0" }}><strong>Especie:</strong> {character.species}</p>
            <p style={{ margin: "5px 0" }}><strong>Género:</strong> {character.gender}</p>
            <p style={{ margin: "5px 0" }}><strong>Ubicación:</strong> {character.location.name}</p>
        </div>

        <Link to="/" style={{ 
            display: "inline-block", 
            padding: "12px 30px", 
            backgroundColor: "var(--highlight-color)", 
            color: "white", 
            borderRadius: "50px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "transform 0.2s"
        }}>
        Volver al listado
        </Link>
      </div>
    </div>
  );
}