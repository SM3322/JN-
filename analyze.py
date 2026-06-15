from fastapi import APIRouter, File, Form, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from io import BytesIO

from app.services.document_reader import extract_text
from app.services.opinion_writer import generate_opinion
from app.services.word_export import create_word_document

router = APIRouter(prefix="/api", tags=["analysis"])

LAST_RESULT = {"text": ""}


@router.post("/analyze")
async def analyze_document(
    task: str = Form(...),
    file: UploadFile = File(...),
):
    try:
        content = await file.read()
        document_text = extract_text(file.filename, content)
        if not document_text:
            raise HTTPException(status_code=400, detail="Документот нема читлив текст.")
        opinion = generate_opinion(task, document_text)
        LAST_RESULT["text"] = opinion
        return {"opinion": opinion}
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.get("/export-word")
async def export_word():
    if not LAST_RESULT["text"]:
        raise HTTPException(status_code=400, detail="Нема анализа за извоз.")
    content = create_word_document("Стручно мислење", LAST_RESULT["text"])
    return StreamingResponse(
        BytesIO(content),
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={"Content-Disposition": "attachment; filename=strucno-mislenje.docx"},
    )
