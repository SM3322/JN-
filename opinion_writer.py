from openai import OpenAI
from app.core.config import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

SYSTEM_PROMPT = """
Ти си специјализиран правно-стручен асистент за јавни набавки во Република Северна Македонија.
Пишуваш професионално, формално и прецизно на македонски јазик.
Не измислуваш членови од закон. Ако немаш доволна основа, јасно наведуваш дека е потребна дополнителна проверка.
Секогаш анализираш ризици од дискриминаторски услови, ограничување конкуренција, несразмерни критериуми и нејасна техничка спецификација.
Стилот треба да биде погоден за службено стручно мислење.
""".strip()


def build_prompt(task: str, document_text: str) -> str:
    return f"""
Задача: {task}

Подготви детално стручно мислење со следна структура:

1. Предмет на анализа
2. Доставена документација и фактичка состојба
3. Клучни наоди и забелешки
4. Правна анализа според начелата и релевантните правила за јавни набавки
5. Проценка на ризици
6. Препораки за корекција/дополнување
7. Заклучно стручно мислење

Документ за анализа:
---
{document_text[:45000]}
---
""".strip()


def generate_opinion(task: str, document_text: str) -> str:
    if not settings.OPENAI_API_KEY:
        raise RuntimeError("OPENAI_API_KEY is not configured.")

    response = client.responses.create(
        model=settings.OPENAI_MODEL,
        input=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": build_prompt(task, document_text)},
        ],
    )
    return response.output_text
