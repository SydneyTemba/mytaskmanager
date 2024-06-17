# app.py

from fastapi import FastAPI, HTTPException, Depends
from typing import List
import sqlite3

from models.task import Task

app = FastAPI()

DATABASE_URL = "sqlite:///./test.db"

def get_db():
    conn = sqlite3.connect("test.db")
    try:
        yield conn
    finally:
        conn.close()

@app.on_event("startup")
def startup():
    conn = sqlite3.connect("test.db")
    Task.create_table(conn)

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Task Manager API"}

@app.post("/tasks/", response_model=Task)
async def create_task(description: str, db: sqlite3.Connection = Depends(get_db)):
    task = Task(description=description)
    saved_task = task.save(db)
    return saved_task

@app.get("/tasks/{task_id}", response_model=Task)
async def read_task(task_id: int, db: sqlite3.Connection = Depends(get_db)):
    task = Task.find_one(db, task_id)
    return task
