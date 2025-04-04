from fastapi.testclient import TestClient
from app.main import app  # 👈 Use 'app.main' instead of just 'main'

client = TestClient(app)

def test_read_tasks():
    response = client.get("/tasks/")
    assert response.status_code == 200

def test_create_task():
    response = client.post("/tasks/", json={"title": "Task via test", "description": "Test desc"})
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Task via test"
