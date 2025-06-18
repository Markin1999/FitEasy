export function Header() {
  return (
    <header className="flex w-full">
      <div className="w-1/2 p-12 bg-sfondo">
        <h1>
          L'app per personal trainer n. 1 per coinvolgere al meglio i tuoi
          clienti.
        </h1>
        <p>
          Porta il tuo lavoro da coach al livello successivo. Con FitEasy puoi
          gestire clienti, creare schede di allenamento e alimentazione
          personalizzate, monitorare i progressi e automatizzare tutto da
          un’unica piattaforma. Offri un’esperienza professionale, risparmia
          tempo e concentra le tue energie dove contano davvero: sui risultati
          dei tuoi clienti.
        </p>
      </div>
      <div className="w-1/2">
        <img src="/img/hero-home.jpg" alt="Hero Home" />
      </div>
    </header>
  );
}
