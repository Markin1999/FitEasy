import pgPromise from "pg-promise";
import dotenv from "dotenv";

export const db = pgPromise()(
  "postgresql://postgres:Lggs290@localhost:5432/FitEasy"
);

const setup = async () => {
  try {
    await db.none(
      `
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        cognome TEXT NOT NULL,
        businessName TEXT NOT NULL,
        businessEmail TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        token TEXT
        )
        `
    );
    console.log("Tabelle create correttamente");
  } catch (error) {
    console.error("Errore durante la creazione delle tabelle:", error.message);
  }
};

