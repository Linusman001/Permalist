# ��� To-Do List App

A simple **To-Do List web application** built with **Node.js, Express, EJS, and PostgreSQL**.
It allows users to **add, edit, delete, and view tasks** while persisting data in a Postgres database.

---

## ��� Features

* ��� Display tasks with the current date as the list title.
* ➕ Add new tasks to the list.
* ✏️ Edit existing tasks.
* ❌ Delete tasks.
* ���️ PostgreSQL database for persistent storage.
* ��� Environment variables managed with `dotenv`.

---

## ���️ Tech Stack

* **Backend**: Node.js, Express
* **Frontend**: EJS (Embedded JavaScript templates)
* **Database**: PostgreSQL
* **ORM/Driver**: `pg`
* **Other Tools**: `dotenv`, `body-parser`

---

## ��� Project Structure

```
.
├── public/             # Static assets (CSS, JS, images)
├── views/              # EJS templates
│   └── index.ejs
├── date.js             # Utility for formatting date
├── server.js           # Main server file
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PG_HOST=your_host
PG_USER=your_user
PG_PASSWORD=your_password
PG_DB=your_database
PG_PORT=5432
```

### 4. Setup PostgreSQL Database

Run the following SQL:

```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);
```

### 5. Start the app

```bash
npm start
```

The app runs on: [http://localhost:3000](http://localhost:3000)

---

## ��� Future Improvements

* Add task completion status (✔️ Done / ❌ Not Done).
* Support multiple lists (e.g., Work, Personal).
* User authentication for personal lists.
* Deploy to **Render**, **Heroku**, or **Vercel**.

---

## ��� License

This project is licensed under the MIT License.

---
