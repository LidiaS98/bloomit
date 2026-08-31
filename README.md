# 🌿 BloomIT

**BloomIT** is a web application for tracking daily health habits. Users can log sleep, hydration, physical activity, mood, and energy levels, then track their progress over time with interactive charts. The application helps build healthier habits step by step.

> Built as a portfolio project during a mentoring program.

---

## 📸 Screenshots

### Login Screen
![Login Screen](docs/screenshots/1.%20BloomIT%20-%20login%20screen.png)

### Log Today's Habits
![Habit Form](docs/screenshots/2.%20BloomIT%20-%20user%20input.png)

### My Habit Logs
![Habit Logs](docs/screenshots/3.%20BloomIT%20-%20habit%20logs.png)

### Habit Progress Chart
![Statistics](docs/screenshots/4.%20BloomIT%20-%20statics.png)

---

## ✨ Features

- 🔐 User registration and login with BCrypt password hashing
- 📝 Log daily habits — sleep, water, steps, mood and energy
- 📊 Visual progress charts (Chart.js)
- ✅ Input validation on both frontend and backend
- 🗑️ Full CRUD — add, view, edit and delete habit logs
- 📱 Responsive design — works on mobile, tablet and desktop
- 🛡️ Global exception handler for clean error responses

---

## Tech Stack

**Backend**
- Java 21
- Spring Boot 4
- Spring Security + BCrypt
- Spring Data JPA + Hibernate
- PostgreSQL

**Frontend**
- React 19
- Vite
- Chart.js

**Testing**
- JUnit 5
- Mockito

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

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth` | Login |
| POST | `/api/users` | Register a new user |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/habits` | Add a new habit log |
| GET | `/api/habits/{userId}` | Get all habit logs for a user |
| PUT | `/api/habits/{id}` | Update a habit log |
| DELETE | `/api/habits/{id}` | Delete a habit log |

---

## Running Tests

```bash
mvn test
```

---

## Project Structure

```
bloomit/
├── src/
│   └── main/java/com/bloomit/bloomit/
│       ├── controller/     # REST controllers
│       ├── service/        # Business logic
│       ├── repository/     # JPA repositories
│       ├── model/          # Entities and enums
│       ├── dto/            # Data Transfer Objects
│       ├── exception/      # Global exception handler
│       └── config/         # Security and CORS config
├── frontend/               # React + Vite frontend
│   └── src/
│       ├── components/     # React components
│       └── styles/         # CSS styles
├── docs/
│   └── screenshots/        # App screenshots
└── pom.xml
```