import { useNavigate } from "react-router-dom";

export default function Registrazione() {
  const navTo = useNavigate();

  return (
    <div className=" h-screen w-full flex flex-col  justify-center items-center p-3 lg:h-full">
      <div
        onClick={() => {
          navTo("/");
        }}
        className="w-full flex justify-end mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[20px] sm:h-[30px] lg:h-[30px]"
          viewBox="6 6 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
      <form className="flex flex-col w-full items-center gap-3 sm:w-[75%] lg:w-[40%]">
        <div className="flex w-full gap-5 sm:flex-col">
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="font-semibold text-testo">
              NOME
            </label>
            <input
              type="text"
              className="w-full  border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            ></input>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="cognome" className="font-semibold text-testo">
              COGNOME
            </label>
            <input
              type="text"
              className="w-full   border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            ></input>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nomeAttivita" className="font-semibold text-testo">
            NOME ATTIVITA
          </label>
          <input
            type="text"
            className="w-full  border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="font-semibold text-testo">
            EMAIL AZIENDALE
          </label>
          <input
            type="email"
            className="w-full  border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="font-semibold text-testo">
            PASSWORD
          </label>
          <input
            type="password"
            className="w-full   border border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
          ></input>
        </div>

        <button className="w-full font-bold my-3 border border-bottone bg-bottone text-white rounded-md px-4 py-2 sm:my-6 sm:py-4 lg:py-6 ">
          Crea Account
        </button>
      </form>

      <p className="text-center">
        Cliccando su Crea account e registrandoti, accetti i nostri termini e
        condizioni e la privacy police.
      </p>
    </div>
  );
}
