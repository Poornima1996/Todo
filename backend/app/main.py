from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#Setup CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Create tables if they don't exist
models.Base.metadata.create_all(bind=engine)

#Dependency for DB Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

#API Endpoints

@app.get("/tasks/", response_model=list[schemas.TaskOut])
def read_tasks(db: Session = Depends(get_db)):
    return crud.get_latest_tasks(db)

@app.post("/tasks/", response_model=schemas.TaskOut)
def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task)

@app.patch("/tasks/{task_id}/done", response_model=schemas.TaskOut)
def mark_done(task_id: int, db: Session = Depends(get_db)):
    return crud.mark_task_done(db, task_id)
