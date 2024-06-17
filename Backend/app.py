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

# Create Table on Startup
# @app.on_event("startup")
# def startup():
#     conn = sqlite3.connect(DATABASE_URL)
#     cursor = conn.cursor()
#     cursor.execute("""
#         CREATE TABLE IF NOT EXISTS tasks (
#             id INTEGER PRIMARY KEY AUTOINCREMENT,
#             description TEXT NOT NULL
#         )
#     """)
#     conn.commit()

# API Endpoint to Create a Task
# @app.post("/tasks/", response_model=Task)
# async def create_task(description: str, db: sqlite3.Connection = Depends(get_db)):
#     cursor = db.cursor()
#     cursor.execute("INSERT INTO tasks (description) VALUES (?)", (description,))
#     db.commit()
#     task_id = cursor.lastrowid
#     return {"id": task_id, "description": description}

# # API Endpoint to Get All Tasks
# @app.get("/tasks/", response_model=list[Task])
# async def get_tasks(db: sqlite3.Connection = Depends(get_db)):
#     cursor = db.cursor()
#     cursor.execute("SELECT id, description FROM tasks")
#     tasks = [{"id": row[0], "description": row[1]} for row in cursor.fetchall()]
#     return tasks

# API Endpoint to Delete a Task
# @app.delete("/tasks/{task_id}")
# async def delete_task(task_id: int, db: sqlite3.Connection = Depends(get_db)):
#     cursor = db.cursor()
#     cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
#     db.commit()
#     return {"message": "Task deleted successfully"}
