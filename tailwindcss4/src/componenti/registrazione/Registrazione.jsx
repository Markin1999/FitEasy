export default function Registrazione() {
  return (
    <div className="flex flex-col h-screen justify-center items-center px-3 my-3">
      <div className="text-center p-3 sm:mb-12 ">
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
