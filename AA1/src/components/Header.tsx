export default function Header() {
  return (
    <header style={{
      backgroundColor: "var(--card-bg)",
      padding: "20px",
      textAlign: "center",
      borderBottom: "1px solid var(--border-color)"
    }}>
      <h1 style={{ margin: 0, color: "var(--highlight-color)", fontSize: "1.5rem" }}>
        🧪 Rick y Morty App
      </h1>
    </header>
  );
}