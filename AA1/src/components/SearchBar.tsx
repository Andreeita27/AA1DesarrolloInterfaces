type props = {
  value: string;
  onChange: (newValue: string) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (newOrder: "asc" | "desc") => void;
  filterStatus: string;
  onFilterChange: (newStatus: string) => void;
};

export default function SearchBar({ 
  value, 
  onChange, 
  sortOrder, 
  onSortChange,
  filterStatus,
  onFilterChange
}: props) {

  const inputStyle = {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "50px",
    border: "2px solid var(--accent-color)",
    backgroundColor: "var(--card-bg)",
    color: "var(--text-color)",
    outline: "none",
    cursor: "pointer"
  }

  return (
    <div style={{ 
      marginBottom: "30px", 
      display: "flex", 
      justifyContent: "center", 
      gap: "10px", 
      flexWrap: "wrap",
      alignItems: "center"
    }}>
      <input
        type="text"
        placeholder="Nombre..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          width: "200px",
          maxWidth: "400px",
          borderRadius: "50px",
          border: "2px solid var(--accent-color)",
          backgroundColor: "var(--card-bg)",
          color: "var(--text-color)",
          outline: "none",
          textAlign: "center",
          cursor: "text"
        }}
      />
      <select
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
        style={inputStyle}
      >
        <option value="">Todos los estados</option>
        <option value="alive">🟢 Vivo</option>
        <option value="dead">🔴 Muerto</option>
        <option value="unknown">⚪ Desconocido</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        style={inputStyle}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}