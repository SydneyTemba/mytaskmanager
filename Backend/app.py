from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
import sqlite3

from models.task import Task

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# Model for Task
class TaskModel(BaseModel):
    id: int = None
    description: str

# Database Connection
def get_db():
    conn = sqlite3.connect("db.sqlite")
    try:
        yield conn
    finally:
        conn.close()

@app.on_event("startup")
def startup():
    conn = sqlite3.connect("db.sqlite")
    Task.create_table(conn)

@app.post("/tasks", response_model=TaskModel)
def create_task(data: TaskModel, db: sqlite3.Connection = Depends(get_db)):
    task = Task(description=data.description)
    saved_task = task.save(db)
    return saved_task.to_dict()
