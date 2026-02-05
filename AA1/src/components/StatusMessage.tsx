type StatusMessageProps = {
  text: string;
  type?: "loading" | "error" | "empty";
};

export default function StatusMessage({ text, type = "loading" }: StatusMessageProps) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontSize: "1.2rem",
        color: type === "error" ? "red" : "var(--text-color)",
      }}
    >
      {text}
    </div>
  );
}