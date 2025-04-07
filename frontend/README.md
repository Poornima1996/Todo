<# todo-web-app

A full-stack task management dashboard built with FastAPI, React, and PostgreSQL.

#Tech Stack
- **Frontend**: React + Axios + React Toastify
- **Backend**: FastAPI + SQLAlchemy + Pydantic
- **Database**: PostgreSQL
- **Testing**: Pytest + Coverage + Cypress (E2E)
- **Containerized with**: Docker & Docker Compose

##Getting Started

###Prerequisites
- Docker
- Docker Compose

###Start the App
Run the following from the project root:

```bash
docker-compose up --build
```

>Services:
> - Frontend: http://localhost:3000
> - Backend: http://localhost:8000
> - API Docs: http://localhost:8000/docs



##API Endpoints

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/tasks/`              | Get latest 5 tasks        |
| POST   | `/tasks/`              | Add a new task            |
| PATCH  | `/tasks/{id}/done`     | Mark task as done         |

Swagger docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

##Frontend Features
- Add new task (title + description)
- Mark tasks as completed
- View latest 5 tasks
- Toast notifications for feedback

---

##Running Tests

###Backend Tests + Coverage
```bash
docker-compose run --rm backend pytest --cov=app tests/
```
This command will:
- Run **unit + integration tests** from `tests/`
- Output **coverage report**

> Example:
```
app/crud.py          69%  
app/main.py          95%  
TOTAL                91%  
```
Frontend: End-to-End (E2E) Tests with Cypress
npx cypress open
frontend/cypress/e2e/todo.cy.js

##Project Structure
```
Todo/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── database.py
│   ├── tests/
│   │   ├── test_main.py
│   │   └── test_crud.py
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── cypress/
│   │   └── e2e/
│   │       └── todo.cy.js
│   └── Dockerfile
├── docker-compose.yml
--------------

##Notes for Evaluators
- Full-stack app containerized with Docker
- No external DB setup required
- PostgreSQL data stored in a volume
- Unit + integration + e2e tests included

##Author
**Poornima J** - Full-stack Developer
Thank you for reviewing!
#