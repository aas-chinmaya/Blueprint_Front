// components/NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound({ title, description }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {title}
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
        {description}
      </p>

      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "0.7rem 1.3rem",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
    </div>
  );
}
