import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navTo = useNavigate();

  //Per validare l'email:

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    //Importo in registrazione, come con una promps l'email
    navTo("/registrazione", {
      state: {
        email,
      },
    });
  };

  return (
    <header className="flex items-stretch w-full flex-col-reverse pt-[83px] sm:flex-row sm:pt-[103px]">
      <div className=" flex p-6 bg-sfondo justify-center items-center sm:w-1/2 sm:p-8 lg:w-1/2 lg:p-12">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-7 lg:gap-10 lg:w-[80%]">
          <h1
            className="font-poppins text-testo font-bold drop-shadow-strong-blue
                        "
          >
            L'app n. 1 per coinvolgere al meglio i tuoi clienti.
          </h1>
          <p className="text-testo font-normal">
            Porta il tuo lavoro da coach al livello successivo. Con FitEasy puoi
            gestire clienti, creare schede di allenamento e alimentazione
            personalizzate, monitorare i progressi e automatizzare tutto da
            un’unica piattaforma. Offri un’esperienza professionale, risparmia
            tempo e concentra le tue energie dove contano davvero: sui risultati
            dei tuoi clienti.
          </p>
          <div className="flex w-full h-16">
            <input
              type="email"
              placeholder="Inserisci la tua e-mail"
              onChange={handleChange}
              className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            />
            <button
              onClick={handleClick}
              className="w-[35%] font-bold bg-testo text-titolo rounded-r-md inline-block px-4 py-2 drop-shadow-light-blue text-[12px] sm:text-[14px] lg:text-[16px]"
            >
              ISCRIVITI ORA
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>
      <div className="sm:w-1/2 lg:w-1/2 flex ">
        <img
          src="/img/hero-home.jpg"
          alt="Immagine prova"
          className="w-full flex-grow"
        />
      </div>
    </header>
  );
}
