export default function BaranjePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f5f5",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <h1>📄 Анализа на барање за јавна набавка</h1>

        <p>Прикачете барање за јавна набавка:</p>

        <input type="file" accept=".pdf,.doc,.docx" />

        <br />
        <br />

        <button
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Анализирај барање
        </button>
      </div>
    </main>
  );
}
