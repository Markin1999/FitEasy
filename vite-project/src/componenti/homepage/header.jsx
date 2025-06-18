export function Header() {
  return (
    <header className="flex w-full">
      <div className="w-1/2 p-12 bg-sfondo">
        <h1 className="color-titolo">
          L'app per personal trainer n. 1 per coinvolgere al meglio i tuoi
          clienti.
        </h1>
        <p className="color-testo">
          Porta il tuo lavoro da coach al livello successivo. Con FitEasy puoi
          gestire clienti, creare schede di allenamento e alimentazione
          personalizzate, monitorare i progressi e automatizzare tutto da
          un’unica piattaforma. Offri un’esperienza professionale, risparmia
          tempo e concentra le tue energie dove contano davvero: sui risultati
          dei tuoi clienti.
        </p>
        <div className="flex w-full">
          <input
            placeholder="Inserisci il tuo nome"
            className="w-[75%] border border-[#ff6b00] hover:border-[#ff6b00] rounded-l-md px-4 py-2"
          />
          <button className="w-[25%] bg-bottone text-white rounded-r-md px-4 py-2">
            Prova Ora
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/img/hero-home.jpg" alt="Hero Home" />
      </div>
    </header>
  );
}
