import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import type { Character } from "../types";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import StatusMessage from "../components/StatusMessage";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    // Cuando cambia la búsqueda o el filtro vuelve a pedir datos a la API
    setLoading(true);
    getCharacters(1, searchTerm, statusFilter)
      .then((data) => {
        setCharacters(data.results || []);
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("Error al cargar los personajes");
        setLoading(false);
      });
  }, [searchTerm, statusFilter]);

  // Ordenación
  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div style={{ padding: "40px", backgroundColor: "var(--bg-color)", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "var(--highlight-color)", marginBottom: "30px", fontSize: "2.5rem" }}>
        Personajes Rick y Morty
      </h1>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        filterValue={statusFilter}
        onFilterChange={setStatusFilter}
        filterOptions={[
          { label: "🟢 Vivo", value: "alive" },
          { label: "🔴 Muerto", value: "dead" },
          { label: "⚪ Desconocido", value: "unknown" },
        ]}
      />

      {loading && <StatusMessage text="Cargando..." type="loading" />}
      {error && <StatusMessage text={error} type="error" />}

      {!loading && !error && sortedCharacters.length === 0 && (
        <StatusMessage text="No se encontró a nadie." type="empty" />
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "30px" }}>
        {sortedCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}
