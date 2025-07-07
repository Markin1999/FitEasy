export default function Registrazione() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <h2>INIZIA LA TUA PROVA GRATUITA DI 30 GIORNI</h2>
        <h3>Incrementa i tuoi clienti con Fit-easy.</h3>
        <h3>Nessuna carta di credito richiesta</h3>
      </div>
      <form>
        <div>
          <input
            type="text"
            className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
          ></input>
          <input
            type="text"
            className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
          ></input>
        </div>
        <input
          type="text"
          className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
        ></input>
        <input
          type="email"
          className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
        ></input>
        <input
          type="password"
          className="w-[65%]  border border-testo hover:border-testo rounded-l-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
        ></input>
        <button>Crea Account</button>
      </form>

      <p>
        Cliccando su Crea account e registrandoti, accetti i nostri termini e
        condizioni e la privacy police.
      </p>
    </div>
  );
}
