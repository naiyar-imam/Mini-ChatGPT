import time
import json
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from database import Base, engine, SessionLocal
from models import Chat


# wait for postgres
for i in range(10):
    try:
        Base.metadata.create_all(bind=engine)
        print("Database connected")
        break
    except:
        print("Waiting for database...")
        time.sleep(3)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


OLLAMA_URL = "http://ollama:11434/api/generate"


@app.post("/chat-stream")
def chat_stream(req: ChatRequest):

    payload = {
        "model": "llama3",
        "prompt": req.message,
        "stream": True
    }

    response = requests.post(OLLAMA_URL, json=payload, stream=True)

    def generate():

        full_answer = ""

        for line in response.iter_lines():

            if line:

                data = json.loads(line.decode())

                token = data.get("response", "")

                full_answer += token

                yield token

        # save conversation after streaming finishes
        db = SessionLocal()

        chat = Chat(
            user_message=req.message,
            ai_response=full_answer
        )

        db.add(chat)
        db.commit()

    return StreamingResponse(generate(), media_type="text/plain")