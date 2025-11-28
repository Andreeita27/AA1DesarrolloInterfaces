import { useEffect, useState } from "react";
import { getLocations } from "../services/api";
import type { LocationData } from "../types";

export default function LocationsPage() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocations()
      .then((data) => {
        setLocations(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando planetas...</p>;

  return (
    <div style={{ padding: "40px", backgroundColor: "var(--bg-color)", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "var(--highlight-color)", marginBottom: "30px" }}>
        Ubicaciones del Multiverso
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {locations.map((loc) => (
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
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🪐</div>
            
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