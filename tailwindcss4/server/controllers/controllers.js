import { db } from "../initDb.js";
import bcrypt from "bcryptjs";

//Inseriamo gli utenti nel database

export const registrazione = async (req, res) => {
  const { nome, cognome, businessName, businessEmail, password } = req.body;
  console.log("📥 Dati ricevuti:", req.body);
  try {
    const existEmail = await db.oneOrNone(
      `SELECT * FROM utenti WHERE businessemail = $1`,
      [businessEmail]
    );

    if (existEmail) {
      console.log("✅ Email gia esistente:");

      return res.status(409).json({ message: "Utente gia registrato" });
    }

    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);

    const user = await db.one(
      `INSERT INTO utenti (nome, cognome, businessname, businessemail, password) VALUES ($1, $2, $3, $4, $5) returning id`,
      [nome, cognome, businessName, businessEmail, hashed]
    );

    res
      .status(201)
      .json({ message: "Utente creato con successo", userId: user.id });

    console.log("✅ Utente inserito:", user);
  } catch (error) {
    res.status(500).json({ message: "Errore durante la registrazione" });
  }
};
