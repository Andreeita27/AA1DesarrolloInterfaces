type props = {
  value: string;
  onChange: (newValue: string) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (newOrder: "asc" | "desc") => void;
};

export default function SearchBar({ value, onChange, sortOrder, onSortChange }: props) {
  return (
    <div style={{ 
      marginBottom: "40px", 
      textAlign: "center",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap"
    }}>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "50px",
          border: "2px solid var(--accent-color)",
          backgroundColor: "var(--card-bg)",
          color: "var(--text-color)",
          outline: "none",
          textAlign: "center"
        }}
      />
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "50px",
          border: "2px solid var(--accent-color)",
          backgroundColor: "var(--card-bg)",
          color: "var(--text-color)",
          outline: "none",
          cursor: "pointer"
        }}
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}