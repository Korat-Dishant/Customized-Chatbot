from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from OpenAI import ask_ai




app = FastAPI(title="Customized Chatbot", description="Customized Chatbot API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/extract", summary="custom Chat bot", tags=["Chatbot"])
def extract(data: str) -> str:
    return str(ask_ai(data))


@app.get("/")
async def index():
    return {"message": "Hello World use //extract for api"}


if __name__ == "__main__":
    print(ask_ai("what is my name ?"))
