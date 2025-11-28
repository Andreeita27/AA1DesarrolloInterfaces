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

  if (loading) return <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>Cargando detalles...</div>;
  
  if (!character) return <div style={{ color: "white", textAlign: "center" }}>Personaje no encontrado</div>;

  return (
    <div style={{ padding: "40px", backgroundColor: "#24282F", minHeight: "100vh", color: "white", textAlign: "center" }}>
      
      <div style={{ 
          maxWidth: "600px", 
          margin: "0 auto", 
          backgroundColor: "#3C3E44", 
          padding: "30px", 
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
      }}>
        <img 
          src={character.image} 
          alt={character.name} 
          style={{ width: "200px", borderRadius: "50%", border: "4px solid #FF9800", marginBottom: "20px" }} 
        />
        <h1 style={{ fontSize: "2.5rem", color: "#FF9800", marginBottom: "10px" }}>{character.name}</h1>
        
        <div style={{ fontSize: "1.2rem", lineHeight: "1.8", textAlign: "left", paddingLeft: "20px" }}>
          <p><strong>Estado:</strong> {character.status === "Alive" ? "🟢 Vivo" : "🔴 Muerto"}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ubicación:</strong> {character.location.name}</p>
        </div>

        <Link to="/" style={{ 
            display: "inline-block", 
            marginTop: "30px", 
            padding: "10px 20px", 
            backgroundColor: "#FF9800", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "5px",
            fontWeight: "bold"
        }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}