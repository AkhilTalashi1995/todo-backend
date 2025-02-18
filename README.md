# Backend Setup - Todo List App

## Overview

This is the backend for the **Full-Stack Todo List App**, built with **Express.js**, **Prisma**, and **MySQL**. It provides RESTful API endpoints for managing tasks, including creating, reading, updating, and deleting tasks.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+)
- **MySQL**
- **Prisma CLI**

---

## 1. Clone the Repository

```bash
git clone https://github.com/AkhilTalashi1995/todo-backend.git
cd todo-backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL="mysql://username:password@localhost:3306/todo_db"
PORT=5001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

- **DATABASE_URL**: Replace with your MySQL credentials if different.
- **PORT**: The port where the backend will run.
- **CORS_ORIGIN**: The URL of your frontend (Next.js app).

---

## 4. Database Initialization with Prisma

### 4.1. Create the Database

Ensure MySQL is running, then create the database manually:

```bash
mysql -u root -p -e "CREATE DATABASE todo_db;"
```

### 4.2. Generate Prisma Client

If you haven't already initialized Prisma, run:

```bash
npx prisma init
```

Run the following command to apply the Prisma schema:

```bash
npx prisma migrate dev --name init
```

This will:
- Create the necessary tables.
- Apply migrations.
- Generate Prisma Client for database access.

---

## 5. Start the Server

```bash
npm run dev
```

Your backend API should now be running at **http://localhost:5001**.

---

## 6. API Endpoints

### **GET api/tasks**
Fetch all tasks.

```bash
GET http://localhost:5001/api/tasks
```

---

### **POST api/tasks**
Create a new task.

```bash
POST http://localhost:5001/api/tasks
Content-Type: application/json

{
  "title": "New Task",
  "color": "blue"
}
```

---

### **PUT api/tasks/:id**
Update a task.

```bash
PUT http://localhost:5001/api/tasks/1
Content-Type: application/json

{
  "title": "Updated Task",
  "completed": true
}
```

---

### **DELETE api/tasks/:id**
Delete a task.

```bash
DELETE http://localhost:5001/api/tasks/1
```

---

## 7. Notes

- Keep the `.env` file out of version control (`.gitignore` includes it by default).
- Ensure the frontend (Next.js app) runs on **http://localhost:3000** to match the CORS policy.

---

## Troubleshooting

- **Database Connection Issues**: Verify that MySQL is running and the `DATABASE_URL` in `.env` is correct.
- **Prisma Errors**: Run `npx prisma generate` to regenerate the Prisma client if schema changes are made.
- **CORS Issues**: Ensure the `CORS_ORIGIN` in `.env` matches the frontend URL.

---

## Contributing

Feel free to open issues or submit pull requests for improvements. Follow the existing code style and structure.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
