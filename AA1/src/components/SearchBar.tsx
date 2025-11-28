type props = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function SearchBar({ value, onChange }: props) {
  return (
    <div style={{ marginBottom: "40px", textAlign: "center" }}>
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
    </div>
  );
}