# Lộ trình practice speckit cho project

# Spec-kit-practice_Duy

A practice repository for building a Todo REST API with the Spec Kit workflow.

## Project Overview

This repository contains a complete Todo REST API implementation, specification, planning, and tests. It is built to demonstrate the full Spec Kit workflow from requirement definition to working code and documentation.

## Files and Directories

- `.github/` - GitHub Actions CI workflow.
- `.specify/` - Spec Kit project configuration and metadata.
- `specs/` - Feature specs, plans, tasks, and checklists.
- `src/` - Application source code.
- `__tests__/` - Automated API tests.
- `.gitignore` - Files to exclude from Git.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the API:

```bash
npm start
```

Run tests:

```bash
npm test
```

## API Overview

### Authentication

- `POST /api/auth/register`
  - body: `{ email, password }`
- `POST /api/auth/login`
  - body: `{ email, password }`

### Todo Management

All todo endpoints require a valid JWT in the `Authorization` header:

`Authorization: Bearer <token>`

- `POST /api/todos`
  - body: `{ title, description?, dueDate? }`
- `GET /api/todos`
  - query: `search`, `status`, `page`, `limit`
- `GET /api/todos/:id`
- `PUT /api/todos/:id`
  - body: `{ title?, description?, dueDate?, completed? }`
- `DELETE /api/todos/:id`

## Project Documentation

- `.specify/project.spec.md` - Full requirement specification and acceptance criteria.
- `specs/001-todo-rest-api/spec.md` - Feature spec for the Todo API.
- `specs/001-todo-rest-api/plan.md` - Architecture and implementation plan.
- `specs/001-todo-rest-api/tasks.md` - Task breakdown and execution order.
- `specs/001-todo-rest-api/checklists/requirements.md` - Quality checklist for feature validation.

## Notes

- Authentication uses JWT tokens with a default 1 hour expiry.
- Password hashing uses bcrypt.
- Data is stored in an in-memory repository for practice, not production.
- The CI workflow validates tests on push and pull request.

---

# Spec Kit Practice Roadmap from A to Z

## Phase 1: Understand the project structure (30 minutes)

Start by opening the whole project and reviewing the folders:

```text
SpecPractice/
├── .github/
├── .specify/
├── specs/
├── README.md
└── ...
```

Try to answer these questions:

- What does `.github/` contain? (prompts, workflows, and instructions for Copilot)
- What does `.specify/` contain? (Spec Kit templates and configuration)
- What does `specs/` contain? (each feature after a spec is created)

👉 Exercise: Open each file and read it; no edits are required yet.

---

## Phase 2: Constitution

This is the "rulebook" of the project.

In Copilot Chat, run:

```text
/speckit.constitution
```

Example:

```text
Project: Todo REST API

Principles:

- Clean Architecture
- SOLID
- TDD first
- Unit Test >90%
- RESTful API
- Java 21
- Spring Boot
```

After the AI creates it, do not move on immediately.

Read the file and ask yourself:

- Why choose Clean Architecture?
- Why is TDD important?
- What happens if unit tests are removed?

👉 This is where you learn software engineering, not just Spec Kit.

---

## Phase 3: Specification

Next, run:

```text
/speckit.specify
```

Example:

```text
Build a Todo REST API.

User can:

- Register
- Login
- Create Todo
- Edit Todo
- Delete Todo
- Search Todo
- Complete Todo
```

Read `spec.md` and look for these sections:

```text
Requirements

Acceptance Criteria

Edge Cases

Assumptions

Business Rules
```

Try to answer:

- Is this requirement clear enough?
- Are the acceptance criteria testable?
- Are any edge cases missing?

---

## Phase 4: Plan

Run:

```text
/speckit.plan
```

The AI will generate:

- Architecture
- Database
- API
- Folder structure
- Testing strategy

Do not only read it; try to visualize the flow:

```text
Client

↓

Controller

↓

Service

↓

Repository

↓

Database
```

If you are acting as a tester, this stage is especially valuable because it helps you understand the system before testing it.

---

## Phase 5: Tasks

Run:

```text
/speckit.tasks
```

Example:

```text
Task 1
Create User Entity

Task 2
Create Login API

Task 3
JWT

Task 4
Unit Test

Task 5
Integration Test
```

Reflect on:

- Which tasks can run in parallel?
- Which tasks depend on others?
- Which tasks carry the highest risk?

This is the core of work breakdown thinking.

---

## Phase 6: Implement

Run:

```text
/speckit.implement
```

At this stage, the AI writes the code.

After each task:

- Read the code
- Read the tests
- Fix issues if needed
- Commit to Git

---

## Phase 7: Analyze

After the code exists, run:

```text
/speckit.analyze
```

It will check:

- Whether the spec matches the code
- Whether any tasks were missed
- Whether the constitution was violated

---

## Phase 8: Clarify

If the spec is unclear, run:

```text
/speckit.clarify
```

Example:

```text
Search Todo

Should search be case sensitive?

Should completed tasks appear?

Should pagination be supported?
```

The AI will ask questions to make the requirements clearer.

---

## Phase 9: Converge

Run:

```text
/speckit.converge
```

If the code and spec diverge, the AI will:

- add missing tasks,
- update the spec,
- or suggest changes.

---

## First Practice Project

Do not start with a large project. Begin with:

```text
Todo REST API
```

Features:

```text
Register

Login

CRUD Todo

Search

Filter

Pagination

JWT

Docker
```

This is enough to learn the full workflow.

---

## For a Tester Role

You can extend the practice by asking the AI to generate test cases from the spec:

```text
Generate test cases for all acceptance criteria.
```

Or:

```text
Generate API test scenarios.
```

Or:

```text
Generate boundary value test cases.
```

This is very close to real-world testing work.

---

## 5-Day Practice Plan

| Day | Goal |
| --- | --- |
| 1 | Read the project structure, run constitution, and understand each file |
| 2 | Create specification and analyze requirements and acceptance criteria |
| 3 | Generate the plan, draw the architecture, and understand data flow |
| 4 | Generate tasks, evaluate order and dependencies between tasks |
| 5 | Implement, review the code, generate test cases, and run analyze |

## I Can Support You as a Mentor

If you want to learn seriously instead of just running commands, I can guide you like a mentor:

- Day 1: Understand Spec Kit and Spec-Driven Development
- Day 2: Write the constitution and specification for a real project
- Day 3: Analyze the plan and architecture
- Day 4: Generate tasks, review them, and improve them
- Day 5: Implement, test, and review the full workflow
