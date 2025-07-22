import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Registrazione() {
  const [utente, setUtente] = useState({
    nome: "",
    cognome: "",
    businessName: "",
    businessEmail: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const location = useLocation();
  const navTo = useNavigate();

  useEffect(() => {
    const email = location.state?.email || "";
    setUtente((prev) => ({ ...prev, businessEmail: email }));
  }, []);

  //---
  //Serve per impostare un timeout ai messaggi di errori.
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUtente((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (utente.password) {
      if (utente.password.length < 8) {
        setMessage("La password deve contenere almeno 8 caratteri");
      } else {
        setMessage("");
      }
    }
    //Salvo l'utente nel localstorage
    if (
      utente.nome ||
      utente.cognome ||
      utente.businessName ||
      utente.businessEmail ||
      utente.password
    ) {
      localStorage.setItem("utenteRegistrato", JSON.stringify(utente));
      navTo("/accedi");
    } else {
      setMessage("Compila tutti i campo obbligatori");
    }
  };

  return (
    <div className=" h-screen w-full flex flex-col  justify-center items-center p-3 lg:h-full">
      <div className="w-full flex justify-end mb-8 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[20px] sm:h-[30px] lg:h-[30px]"
          viewBox="6 6 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={() => {
            navTo("/");
          }}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      <div className="text-center px-3 pb-3 sm:mb-12 ">
        <h2 className="font-bold text-testo mb-2 sm:mb-6">
          INIZIA LA PROVA GRATUITA <br /> DI 30 GIORNI
        </h2>
        <h3 className="mb-[0.1em] sm:mb-[0.5em]">
          Incrementa i tuoi clienti con Fit-easy.
        </h3>
        <h3>Nessuna carta di credito richiesta</h3>
      </div>
      <form
        className="flex flex-col w-full items-center gap-3 sm:w-[75%] lg:w-[40%]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full gap-5 sm:flex-col">
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="font-semibold text-testo">
              NOME<span className="w-[0.0625rem] h-[0.0625rem]">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={utente.nome}
              onChange={handleChange}
              className="w-full  border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
              required
            ></input>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="cognome" className="font-semibold text-testo">
              COGNOME<span className="w-[0.0625rem] h-[0.0625rem]">*</span>
            </label>
            <input
              type="text"
              name="cognome"
              value={utente.cognome}
              onChange={handleChange}
              className="w-full   border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
              required
            ></input>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nomeAttivita" className="font-semibold text-testo">
            NOME ATTIVITA<span className="w-[0.0625rem] h-[0.0625rem]">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            value={utente.businessName}
            onChange={handleChange}
            className="w-full  border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            required
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-testo">
            EMAIL AZIENDALE
            <span className="w-[0.0625rem] h-[0.0625rem]">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            value={utente.businessEmail}
            onChange={handleChange}
            className="w-full border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            required
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="font-semibold text-testo">
            PASSWORD<span className="w-[0.0625rem] h-[0.0625rem]">*</span> (8
            CARATTERI)
          </label>
          <input
            type="password"
            name="password"
            value={utente.password}
            onChange={handleChange}
            className="w-full   border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            required
          ></input>
        </div>

        {message && <p>{message}</p>}

        <button
          className="text-2xl   w-full font-bold my-3 border border-bottone bg-bottone text-white rounded-md px-4 py-2 sm:my-6 sm:py-4 sm:text-3xl lg:py-3 "
          type="submit"
        >
          REGISTRATI
        </button>
      </form>

      <p className="text-center">
        Cliccando su Crea account e registrandoti, accetti i nostri termini e
        condizioni e la privacy police.
      </p>
    </div>
  );
}
