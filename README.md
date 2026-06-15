# Асистент за јавни набавки во Македонија

Професионален AI starter проект за анализа на документација за јавни набавки, подготовка на стручни мислења и извоз во Word документ.

## Архитектура

- `frontend/` — Next.js + TypeScript веб интерфејс
- `backend/` — FastAPI backend
- AI анализа преку OpenAI API
- Поддржани документи: PDF, DOCX, TXT
- Излез: текстуална анализа + Word документ

## Функции во верзија 0.1

- Upload на документ
- Избор на тип анализа
- Генерирање стручно мислење на македонски јазик
- Проверка на ризици: дискриминација, ограничување конкуренција, нејасна спецификација
- Word export

## Локално стартување

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
```

Во `.env` внеси го OpenAI API клучот.

```bash
uvicorn app.main:app --reload --port 8000
```

Провери:

```text
http://localhost:8000/health
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Отвори:

```text
http://localhost:3000
```

## Deployment план

### Frontend

- Vercel
- Environment variable:

```text
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend

- Render или Railway
- Start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

- Environment variables:

```text
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5.5
APP_ENV=production
```

## Следни професионални надградби

1. Login систем
2. PostgreSQL база
3. pgvector / RAG база со Закон за јавни набавки, правилници, одлуки и шаблони
4. Историја на анализи
5. Улоги: администратор, правник, службеник
6. Подобро Word форматирање со меморандум и потпис
7. Citation mode: одговори со наведување на точен извор/член кога документите се внесени во база

## Забелешка

Оваа апликација е асистент за подготовка на нацрт-анализи и стручни мислења. Финалната правна проверка треба да ја направи овластено/стручно лице.
