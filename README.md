# todo-web-app

A full-stack task management dashboard built with **FastAPI**, **React**, and **PostgreSQL**.
This app lets users add, view, and complete tasks in a clean UI with persistent storage, all containerized via Docker.

---

## Features

-Add, view, and mark tasks as completed
-Responsive UI with React
-REST API built with FastAPI
-Persistent storage via PostgreSQL
-Containerized with Docker & Docker Compose
-Unit & integration testing using Pytest
-E2E tests with Cypress

---

## Tech Stack

| Layer      | Stack                                               |
|------------|-----------------------------------------------------|
| Frontend   | React, Axios, React Toastify                        |
| Backend    | FastAPI, SQLAlchemy, Pydantic                       |
| Database   | PostgreSQL                                          |
| Testing    | Pytest, Coverage, Cypress (E2E)                     |
| Container  | Docker, Docker Compose                              |

---

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Run the App

From the project root:

```bash
docker-compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:8000

Swagger Docs: http://localhost:8000/docs

--API Endpoints
Method	Endpoint	Description
GET	/tasks/	Get latest 5 tasks
POST	/tasks/	Add a new task
PATCH	/tasks/{id}/done	Mark task as done

--Running Tests
--Backend Unit & Integration Tests
bash
Copy
Edit
docker-compose run --rm backend pytest --cov=app tests/
Example output:

matlab
Copy
Edit
app/crud.py          69%
app/main.py          95%
TOTAL                91%

--Frontend Unit Tests
bash
Copy
Edit
cd frontend
npm install
npm test

--Cypress E2E Tests

bash
Copy
Edit
cd frontend
npx cypress open
Make sure both frontend and backend are running before E2E.

--Project Structure

css
Copy
Edit
todo-web-app/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── database.py
│   ├── tests/
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── ...
│   ├── cypress/
│   │   └── e2e/todo.cy.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md

--Author
Poornima Jayaweera
Full-stack Software Engineer

Thank you for reviewing my project!
-------------------------------------------
