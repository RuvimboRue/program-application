from fastapi import FastAPI
from api.utils.app import *

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
