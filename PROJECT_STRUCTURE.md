# SpecPractice - Todo REST API Project Structure

## Tổng Quan Cấu Trúc

```
SpecPractice/
├── .github/                    # GitHub configurations
│   ├── prompts/               # Copilot prompts cho Spec Kit
│   │   ├── speckit.specify.prompt.md
│   │   ├── speckit.plan.prompt.md
│   │   ├── speckit.tasks.prompt.md
│   │   ├── speckit.implement.prompt.md
│   │   ├── speckit.analyze.prompt.md
│   │   ├── speckit.clarify.prompt.md
│   │   ├── speckit.constitution.prompt.md
│   │   ├── speckit.converge.prompt.md
│   │   ├── speckit.checklist.prompt.md
│   │   └── speckit.taskstoissues.prompt.md
│   └── agents/
│
├── .specify/                  # Spec Kit configuration & templates
│   ├── init-options.json      # Cấu hình project (sequential numbering, AI provider)
│   ├── feature.json           # Current feature directory reference
│   ├── integration.json       # Integration settings
│   ├── templates/
│   │   ├── spec-template.md           # Template cho specification
│   │   ├── plan-template.md           # Template cho planning
│   │   ├── tasks-template.md          # Template cho tasks
│   │   ├── checklist-template.md      # Template cho quality checklist
│   │   └── constitution-template.md   # Template cho constitution
│   ├── memory/                # Session & project memory
│   ├── scripts/               # Automation scripts
│   ├── workflows/             # CI/CD workflows
│   └── integrations/          # Integration configurations
│
├── .vscode/                   # VS Code settings
│
├── specs/                     # Feature specifications directory
│   └── 001-todo-rest-api/     # First feature
│       ├── spec.md            # Feature specification
│       ├── plan.md            # Architecture & planning (sẽ tạo)
│       ├── tasks.md           # Task breakdown (sẽ tạo)
│       ├── checklists/
│       │   └── requirements.md # Quality validation checklist
│       └── implementation/    # Code & tests (sẽ tạo)
│
└── README.md                  # Project documentation (sẽ tạo)
```

## Vai Trò Của Từng Thư Mục

### 1. `.github/prompts/`
Chứa các prompt instructions mà GitHub Copilot sử dụng khi bạn chạy các lệnh Spec Kit:
- Mỗi prompt tương ứng với một giai đoạn trong workflow
- Chúng định hướng AI sinh ra output theo định dạng chuẩn
- **Không cần chỉnh sửa trực tiếp**, nhưng có thể custom nếu cần

### 2. `.specify/`
Là "core configuration" của toàn bộ Spec Kit project:

- **init-options.json**: 
  - `feature_numbering: "sequential"` → Tự động đánh số feature (001, 002, ...)
  - `ai: "copilot"` → Sử dụng GitHub Copilot
  - `speckit_version: "0.12.9.dev0"` → Version Spec Kit hiện tại

- **feature.json**: 
  - Lưu đường dẫn feature directory hiện tại
  - Giúp downstream commands (plan, tasks, implement) biết ở đâu

- **templates/**: 
  - `spec-template.md` → Skeleton cho mỗi spec mới
  - Định nghĩa các section bắt buộc (Requirements, Acceptance Criteria, etc.)

### 3. `specs/`
Nơi lưu trữ tất cả specifications:

- Mỗi feature có một thư mục riêng
- Tên thư mục: `{NUMBER}-{feature-name}` (ví dụ: `001-todo-rest-api`)
- Mỗi feature gồm:
  - `spec.md` - Specification
  - `plan.md` - Architecture & planning
  - `tasks.md` - Task breakdown & dependencies
  - `checklists/` - Quality validation
  - `implementation/` - Code, tests, documentation

---

## Quy Trình Spec-Driven Development

```
1. CONSTITUTION
   ↓ (Nguyên tắc & constraints của project)
   
2. SPECIFICATION ✅ (COMPLETED)
   ↓ (Yêu cầu chức năng & acceptance criteria)
   
3. PLAN (NEXT)
   ↓ (Kiến trúc, database, API design)
   
4. TASKS
   ↓ (Phân rã công việc, dependencies)
   
5. IMPLEMENT
   ↓ (Viết code, tests)
   
6. ANALYZE
   ↓ (Kiểm tra spec ↔ code match)
   
7. CLARIFY (if needed)
   ↓ (Làm rõ requirements)
   
8. CONVERGE (if needed)
   ↓ (Cập nhật spec hoặc code)
```

---

## Current State (2026-07-08)

### ✅ Completed
- Specification (spec.md) - Todo REST API đã được tạo
- 7 user stories (prioritized)
- 18 functional requirements
- 6 measurable success criteria
- Quality checklist validated

### 📋 Next Steps
1. Constitution - Define project principles
2. Plan - Architecture & API design
3. Tasks - Break down implementation
4. Implement - Generate code & tests
5. Documentation & Push to Repo

---

## Cách Sử Dụng Lệnh Spec Kit

### Từ VS Code Copilot Chat:

```bash
# Giai đoạn 2: Tạo Constitution
/speckit.constitution

# Giai đoạn 4: Tạo Plan
/speckit.plan

# Giai đoạn 5: Tạo Tasks
/speckit.tasks

# Giai đoạn 6: Implement
/speckit.implement

# Giai đoạn 7: Analyze
/speckit.analyze

# Giai đoạn 8: Clarify (nếu cần)
/speckit.clarify

# Giai đoạn 9: Converge (nếu cần)
/speckit.converge
```

---

## Files Mà Bạn Cần Đẩy Lên Repo

```
SpecPractice/
├── .github/                  # All files
├── .specify/                 # All files
├── .vscode/                  # All files
├── specs/
│   └── 001-todo-rest-api/
│       ├── spec.md           ✅ Created
│       ├── plan.md           ⏳ To be created
│       ├── tasks.md          ⏳ To be created
│       ├── checklists/
│       │   └── requirements.md ✅ Created
│       └── implementation/   ⏳ To be created
├── README.md                 ✅ Creating now
├── LEARNING_GUIDE.md         ✅ Creating now
└── GIT_PUSH_GUIDE.md        ✅ Creating now
```

---

## Lưu Ý Quan Trọng

1. **Không edit template files** (.specify/templates/) trừ khi bạn muốn thay đổi cấu trúc toàn cục
2. **Spec Kit sẽ auto-generate** plan, tasks, code dựa trên spec
3. **Mỗi lần tạo feature mới** sẽ tự động increment con số (002, 003, ...)
4. **Commit từng giai đoạn** để dễ track progress và review

---

## Kiến Trúc Todo REST API (Overview)

Dựa trên spec, hệ thống sẽ có:

### Layers
```
Presentation (REST Controllers)
    ↓
Business Logic (Services)
    ↓
Data Access (Repositories)
    ↓
Database (User, Todo)
```

### Core Features
- User Authentication (Registration, Login, JWT)
- Todo CRUD (Create, Read, Update, Delete)
- Search & Filter
- Status Management (Completed/Incomplete)

### Key Entities
- **User** - email, password_hash, created_at
- **Todo** - title, description, completed, user_id, created_at, updated_at

---

## Resources

- [Spec Kit Documentation](https://github.com/spec-kit/spec-kit-docs)
- [Your Current Spec](specs/001-todo-rest-api/spec.md)
- [Spec-Driven Development Principles](https://en.wikipedia.org/wiki/Specification-driven_development)
