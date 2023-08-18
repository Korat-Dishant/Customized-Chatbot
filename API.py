from fastapi import FastAPI , Header
from typing import Annotated, List, Union

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


@app.post("/extract", summary="pass value using param", tags=["Chatbot"])
def extract(data: str) -> str:
    return str(ask_ai(data))

@app.post("/ask" ,  summary="pass value using header")
async def read_items(sendQuery: Annotated[Union[List[str], None], Header()] = None):
    return {"response": str(ask_ai(sendQuery[0])) }
    # return {"response": sendQuery[0] }


@app.get("/")
async def index():
    return {"message": "Hello World use //extract for api"}


if __name__ == "__main__":
    print(ask_ai("what is my name ?"))
