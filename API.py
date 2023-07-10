from fastapi import FastAPI
from OpenAI import ask_ai






app = FastAPI(title="Customized Chatbot",description="Customized Chatbot API")
@app.post("/extract", summary="custom Chat bot", tags=["Chatbot"])
def extract(data: str) -> str:
    return str( ask_ai(data) )

@app.get("/")
async def index():
   return {"message": "Hello World uses //extract for api"}








if __name__ == "__main__" :
    print(ask_ai("what is my name ?"))
