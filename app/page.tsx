"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [analysisType, setAnalysisType] = useState("Стручно мислење");

  return (
    <main style={{ minHeight: "100vh", padding: "40px", fontFamily: "Arial", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", padding: "32px", borderRadius: "16px" }}>
        <h1>Бот за јавни набавки</h1>
        <p>Прикачете документ и изберете тип на анализа.</p>

        <label>Тип на анализа</label>
        <select
          value={analysisType}
          onChange={(e) => setAnalysisType(e.target.value)}
          style={{ display: "block", width: "100%", padding: "12px", marginTop: "8px", marginBottom: "20px" }}
        >
          <option>Стручно мислење</option>
          <option>Проверка на техничка спецификација</option>
          <option>Проверка на дискриминаторски услови</option>
          <option>Препораки за корекција</option>
        </select>

        <label>Документ</label>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          style={{ display: "block", marginTop: "8px", marginBottom: "20px" }}
        />

        {fileName && <p>Избран документ: <b>{fileName}</b></p>}

        <button style={{ padding: "12px 20px", borderRadius: "8px", border: "0", cursor: "pointer" }}>
          Анализирај
        </button>
      </div>
    </main>
  );
}
