from io import BytesIO
from pypdf import PdfReader
from docx import Document


def read_pdf(content: bytes) -> str:
    reader = PdfReader(BytesIO(content))
    pages = []
    for page in reader.pages:
        pages.append(page.extract_text() or "")
    return "\n".join(pages).strip()


def read_docx(content: bytes) -> str:
    doc = Document(BytesIO(content))
    return "\n".join(p.text for p in doc.paragraphs if p.text).strip()


def read_txt(content: bytes) -> str:
    return content.decode("utf-8", errors="ignore").strip()


def extract_text(filename: str, content: bytes) -> str:
    lower = filename.lower()
    if lower.endswith(".pdf"):
        return read_pdf(content)
    if lower.endswith(".docx"):
        return read_docx(content)
    if lower.endswith(".txt"):
        return read_txt(content)
    raise ValueError("Unsupported file type. Use PDF, DOCX, or TXT.")
