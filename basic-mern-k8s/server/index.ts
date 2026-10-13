import express from "express";
import { Pool } from "pg";
import cors from "cors"

const app = express();
const port = Number(process.env.PORT) || 3000;

const db = new Pool({
	connectionString: process.env.DB_URL,
});

app.use(cors())

app.get("/", async (_request, response) => {
	try {
		await db.query("SELECT 1");
		response.json({ ok: true });
	} catch (error) {
		console.error("db ping failed", error);
		response.status(500).json({ ok: false });
	}
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
