export default function Registrazione() {
  return (
    <div className="flex ">
      <div>
        <h1>INIZIA LA TUA PROVA GRATUITA DI 30 GIORNI</h1>
        <p>Incrementa i tuoi clienti con Fit-east.</p>
        <p>Nessuna carta di credito richiesta</p>
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
        <button></button>
      </form>

      <p>
        Cliccando su Crea account e registrandoti, accetti i nostri termini e
        condizioni e la privacy police.
      </p>
    </div>
  );
}
