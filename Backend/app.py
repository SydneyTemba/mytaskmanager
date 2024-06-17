from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3

from models.task import Task

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

# Model for Task
class TaskModel(BaseModel):
    description: str

# Database Connection
@app.post("/tasks")
def create_task(data: TaskModel):
    task = Task(data.description)
    task.save()
    return task.to_dict()

