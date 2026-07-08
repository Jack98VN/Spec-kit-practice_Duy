# Todo REST API Constitution

## Core Principles

### I. Clean Architecture
Every feature should be organized into clear layers such as routes, controllers, services, repositories, and data access so the system remains understandable and maintainable.

### II. RESTful API Design
The API must expose clear, resource-oriented endpoints with predictable request and response behavior, and use standard HTTP status codes.

### III. Test-First (NON-NEGOTIABLE)
Tests are required before implementation whenever feasible. New functionality must be covered by automated tests that verify behavior end to end.

### IV. Security by Default
Authentication and authorization must be enforced for protected endpoints, and secrets must not be committed to the repository.

### V. Simplicity and Practice-Ready Delivery
The project should remain simple enough for learning and practice, while still demonstrating real-world engineering habits such as validation, documentation, and CI.

## Technical Constraints

- The project uses Node.js and Express.js for the API.
- JWT-based authentication is required for protected routes.
- Passwords must be stored as hashes, never in plain text.
- The primary learning datastore is in-memory, but the code should be structured so it can evolve to a persistent database later.

## Development Workflow

- Every major feature must include documentation and tests.
- The implementation must align with the feature specification and plan artifacts.
- Changes must be validated with automated tests before being considered complete.

## Governance

This constitution supersedes ad-hoc implementation decisions. Any change to these principles must be documented in the repository and reflected in the relevant specification, plan, and task artifacts.

**Version**: 1.0.0 | **Ratified**: 2026-07-08 | **Last Amended**: 2026-07-08
