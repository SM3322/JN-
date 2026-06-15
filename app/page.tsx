"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1>Асистент за јавни набавки - РС Македонија</h1>

        <p>
          Изберете модул за анализа:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <a href="/baranje" style={{ textDecoration: "none" }}>
  <button style={buttonStyle}>
    📄 Анализа на барање
  </button>
</a>

          <button style={buttonStyle}>
            📋 Анализа на техничка спецификација
          </button>

          <button style={buttonStyle}>
            📑 Анализа на тендерска документација
          </button>

          <button style={buttonStyle}>
            ⚖️ Подготовка на одговор на жалба
          </button>
        </div>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: "40px",
  fontSize: "18px",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  background: "white",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
