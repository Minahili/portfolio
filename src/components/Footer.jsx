export default function Footer() {
  return (
    <footer
      style={{
        padding: "28px 0",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 12.5, color: "var(--text-faint)" }}>
        © {new Date().getFullYear()} Minahil Irfan. Built with React.
      </p>
    </footer>
  );
}
