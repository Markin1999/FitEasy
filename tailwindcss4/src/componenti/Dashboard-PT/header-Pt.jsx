import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderPt() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navTo = useNavigate();

  return (
    <header className="flex w-full pt-[79px]  sm:pt-[81px]">
      <div className="w-full flex flex-col p-6 bg-gradient-to-r from-indigo-500 to-blue-600 gap-5 sm:gap-7 sm:p-8 lg:gap-10 lg:w-[80%]   lg:p-12 ">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-Pacifico border-b border-etichette tracking-[0.15em] text-white">
              DEP SRL
            </h1>

            <p className="text-white font-normal">Riepilogo attività</p>
          </div>
          <div className="flex justify-end">
            <button>Aggiungi cliente</button>
            <button>Appuntamenti</button>
          </div>
        </div>

        <div>
          <div className="w-full grid grid-cols-3 text-center ">
            <div className="button-pt">
              Clienti attivi:
              <div className="font-semibold text-2xl">2</div>
            </div>
            <div className="button-pt">
              Impegni giornalieri:
              <div className="font-semibold text-2xl">2</div>
            </div>
            <div className="button-pt">
              Notifiche: <div className="font-semibold text-2xl">2</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
