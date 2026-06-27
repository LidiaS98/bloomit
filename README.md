# 🌿 BloomIT

**BloomIT** is a web application for tracking daily health habits. Users can log sleep, hydration, physical activity, mood, and energy levels, then track their progress over time. The application helps build healthier habits step by step.
Built with Java + Spring Boot (backend), PostgreSQL (database), and React.

---

## Tech Stack

**Backend**
- Java 21
- Spring Boot 4
- Spring Security
- Spring Data JPA + Hibernate
- PostgreSQL
  **Frontend**
- React 19
- Vite
---
## Prerequisites

Make sure you have the following installed:

- Java 21
- Maven
- Node.js (v18+)
- PostgreSQL
---

## Database Setup

1. Start PostgreSQL and create a database:
```sql
CREATE DATABASE bloomit;
```

2. Update your credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/bloomit
spring.datasource.username=your_username
spring.datasource.password=your_password
```
 
---
## Running the Application

The easiest way to start both frontend and backend at once:

```bash
./start.sh
```

Then open your browser at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8080
---

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/habits` | Add a new habit log |
| GET | `/api/habits/{userId}` | Get all habit logs for a user |
| DELETE | `/api/habits/{id}` | Delete a habit log |
| POST | `/api/users` | Create a new user |
| GET | `/api/users/{id}` | Get user by ID |
 
---

![Draft of App graph.png](src/main/resources/static/Draft%20of%20App%20graph.png)
---

## Running Tests

```bash
mvn test
```
 
---