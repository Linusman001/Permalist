# í³ To-Do List App

A simple **To-Do List web application** built with **Node.js, Express, EJS, and PostgreSQL**.
It allows users to **add, edit, delete, and view tasks** while persisting data in a Postgres database.

---

## íº€ Features

* í³… Display tasks with the current date as the list title.
* â• Add new tasks to the list.
* âœï¸ Edit existing tasks.
* âŒ Delete tasks.
* í·„ï¸ PostgreSQL database for persistent storage.
* í´ Environment variables managed with `dotenv`.

---

## í» ï¸ Tech Stack

* **Backend**: Node.js, Express
* **Frontend**: EJS (Embedded JavaScript templates)
* **Database**: PostgreSQL
* **ORM/Driver**: `pg`
* **Other Tools**: `dotenv`, `body-parser`

---

## í³‚ Project Structure

```
.
â”œâ”€â”€ public/             # Static assets (CSS, JS, images)
â”œâ”€â”€ views/              # EJS templates
â”‚   â””â”€â”€ index.ejs
â”œâ”€â”€ date.js             # Utility for formatting date
â”œâ”€â”€ server.js           # Main server file
â”œâ”€â”€ .env                # Environment variables
â”œâ”€â”€ package.json
â””â”€â”€ README.md
```

---

## âš™ï¸ Setup

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

## í³¸ Screenshot (Optional)

*Add a screenshot of your UI here after running the app.*

---

## í´® Future Improvements

* Add task completion status (âœ”ï¸ Done / âŒ Not Done).
* Support multiple lists (e.g., Work, Personal).
* User authentication for personal lists.
* Deploy to **Render**, **Heroku**, or **Vercel**.

---

## í³œ License

This project is licensed under the MIT License.

---
