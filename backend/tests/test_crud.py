from app import crud, schemas
from app.database import SessionLocal

def test_create_task():
    db = SessionLocal()
    task_in = schemas.TaskCreate(title="Test Task", description="Test Desc")
    task = crud.create_task(db, task_in)
    assert task.title == "Test Task"
    assert task.description == "Test Desc"
    db.close()
