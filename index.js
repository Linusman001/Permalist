import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"
import pg from "pg"
import date from "./date.js"
import env from "dotenv"

env.config()
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))

const db = new pg.Client(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB,
        port: process.env.PG_PORT,
      }
);


await db.connect()

let items = []

async function getItems() {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC")
    return result.rows
  } catch (error) {
    console.log(error)
  }

}

app.get("/", async (req, res) => {
  items = await getItems()
  console.log(date.getDate())
  res.render("index.ejs", {
    listTitle: date.getDate(),
    year: date.getYear(),
    listItems: items,
  })
})

app.post("/add", async (req, res) => {
  const item = req.body.newItem
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item])
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

app.post("/edit", async (req, res) => {
  const title = req.body.updatedItemTitle.trim()
  const id = req.body.updatedItemId

  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [title, id])
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId.trim()

  try {
    await db.query("DELETE FROM items WHERE id = $1", [id])
    res.redirect("/")
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})