import { Link } from "react-router-dom";
import type { Character } from "../types";

type props = {
  character: Character;
};

export default function CharacterCard({ character }: props) {
  return (
    <div
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
        src={character.image}
        alt={character.name}
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
        {character.name}
      </h2>
      
      <p style={{ margin: "0 0 20px 0", fontSize: "0.95rem", color: "#666" }}>
        {character.status === "Alive" ? "🟢" : character.status === "Dead" ? "🔴" : "⚪"} {character.species}
      </p>

      <Link
        to={`/character/${character.id}`}
        style={{
          display: "inline-block",
          backgroundColor: "var(--highlight-color)",
          color: "white",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "10px 24px",
          borderRadius: "50px"
        }}
      >
        Ver detalle
      </Link>
    </div>
  );
}