import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderPt() {
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
    <header className="flex w-full pt-[79px]  sm:pt-[81px]">
      <div className=" flex p-6 bg-gradient-to-r from-indigo-500 to-blue-600 sm:p-8  lg:p-12">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-7 lg:gap-10 lg:w-[80%]">
          <div>
            <div>
              <h1 className="font-Pacifico border-b border-etichette tracking-[0.15em] text-white">
                DEP SRL
              </h1>

              <p className="text-white font-normal">Riepilogo attività</p>
            </div>
            <div>
              <button>Aggiungi cliente</button>
              <button>Appuntamenti</button>
            </div>
          </div>

          <div>
            <div>
              <div>Clienti attivi:</div>
              <div>Impegni giornalieri:</div>
              <div>Notifiche:</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
