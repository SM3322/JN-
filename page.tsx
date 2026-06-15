"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [task, setTask] = useState("Стручно мислење");
  const [opinion, setOpinion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyze() {
    if (!file) return;
    setLoading(true);
    setError("");
    setOpinion("");

    const formData = new FormData();
    formData.append("task", task);
    formData.append("file", file);

    try {
      const res = await fetch(`${API_URL}/api/analyze`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Настана грешка.");
      setOpinion(data.opinion);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Настана грешка.");
    } finally {
      setLoading(false);
    }
  }

  function exportWord() {
    window.open(`${API_URL}/api/export-word`, "_blank");
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Асистент за јавни набавки</h1>
        <p>
          Прикачи PDF, DOCX или TXT документ и добиј формално стручно мислење за јавна набавка.
        </p>

        <label>Тип на анализа</label>
        <select value={task} onChange={(e) => setTask(e.target.value)}>
          <option>Стручно мислење</option>
          <option>Проверка на техничка спецификација</option>
          <option>Проверка на дискриминаторски услови</option>
          <option>Препораки за корекција</option>
          <option>Одговор на барање за појаснување</option>
        </select>

        <label>Документ</label>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <div className="actions">
          <button onClick={analyze} disabled={!file || loading}>
            {loading ? "Се анализира..." : "Анализирај"}
          </button>
          <button onClick={exportWord} disabled={!opinion}>
            Преземи Word
          </button>
        </div>

        {error && <div className="result">Грешка: {error}</div>}
        {opinion && <div className="result">{opinion}</div>}
      </section>
    </main>
  );
}
