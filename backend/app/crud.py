from sqlalchemy.orm import Session
from . import models, schemas

def get_latest_tasks(db: Session):
    return db.query(models.Task).filter(models.Task.completed == False).order_by(models.Task.id.desc()).limit(5).all()

def create_task(db: Session, task: schemas.TaskCreate):
    db_task = models.Task(title=task.title, description=task.description)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def mark_task_done(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task:
        task.completed = True
        db.commit()
    return task
