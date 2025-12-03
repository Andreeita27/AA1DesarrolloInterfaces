import { useEffect, useState } from "react";
import { getLocations } from "../services/api";
import type { LocationData } from "../types";
import SearchBar from "../components/SearchBar";

function getLocationIcon(type: string) {
  switch (type) {
    case "Planet": return "🪐";
    case "Space station": return "🛰️";
    case "Cluster": return "🌌";
    case "Microverse": return "📦";
    case "TV": return "📺";
    case "Resort": return "🏝️";
    case "Fantasy town": return "🧚";
    case "Dream": return "💤";
    case "Dimension": return "🌀";
    case "Menagerie": return "🐾";
    case "Game": return "🎮";
    case "Customs": return "🛃";
    case "Daycare": return "👶";
    case "Dwarf planet": return "🌑";
    default: return "❓";
  }
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    getLocations(1, searchTerm, typeFilter)
      .then((data) => {
        setLocations(data.results || []);
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("Error al cargar las ubicaciones");
        setLoading(false);
        setLocations([]); 
      });
  }, [searchTerm, typeFilter]);

  const sortedLocations = [...locations].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
  });

    return (
      <div style={{ padding: "40px", backgroundColor: "var(--bg-color)", minHeight: "100vh" }}>
          <h1 style={{ textAlign: "center", color: "var(--highlight-color)", marginBottom: "30px", fontSize: "2.5rem" }}>
            Ubicaciones del Multiverso
          </h1>

          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            filterValue={typeFilter}
            onFilterChange={setTypeFilter}
              filterOptions={[
                { label: "🪐 Planeta", value: "Planet" },
                { label: "🛰️ Estación Espacial", value: "Space Station" },
                { label: "🌌 Galaxia", value: "Cluster" },
                { label: "📦 Microverso", value: "Microverse" },
                { label: "📺 TV", value: "TV" },
                { label: "🏝️ Resort", value: "Resort" },
                { label: "🧚 Fantasía", value: "Fantasy town" },
                { label: "💤 Sueño", value: "Dream" },
                { label: "🌀 Dimensión", value: "Dimension" },
                { label: "🐾 Menagerie", value: "Menagerie" },
                { label: "🎮 Juego", value: "Game" },
                { label: "🛃 Aduana", value: "Customs" },
                { label: "👶 Guardería", value: "Daycare" },
                { label: "🌑 Planeta Enano", value: "Dwarf planet" },
                { label: "❓ Desconocido", value: "unknown" }
              ]}
          />

          {loading && <p style={{ textAlign: "center", fontSize: "1.2rem", color: "var(--text-color)" }}>Cargando...</p>}

          {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

          {!loading && !error && sortedLocations.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ fontSize: "1.5rem", color: "var(--text-color)" }}>
                 No se encontró ninguna ubicación.
            </p>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
            {sortedLocations.map((loc) => (
              <div 
                key={loc.id} 
                style={{ 
                  backgroundColor: "var(--card-bg)", 
                  padding: "20px", 
                  borderRadius: "15px",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  textAlign: "center"
                  }}
              >
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                {getLocationIcon(loc.type)}
              </div>
                        
              <h3 style={{ margin: "0 0 10px 0", color: "var(--text-color)" }}>{loc.name}</h3>
                        
              <p style={{ margin: "5px 0", color: "#666", fontSize: "0.9rem" }}>
                <strong>Tipo:</strong> {loc.type}
              </p>
              <p style={{ margin: "5px 0", color: "var(--accent-color)", fontWeight: "bold", fontSize: "0.9rem" }}>
                {loc.dimension}
              </p>
              </div>
            ))}
          </div>
      </div>
    );
}