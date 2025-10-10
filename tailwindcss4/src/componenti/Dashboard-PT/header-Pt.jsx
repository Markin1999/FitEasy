import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderPt() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navTo = useNavigate();

  return (
    <header className="flex w-full pt-[79px]  sm:pt-[81px]">
      <div className="w-full flex flex-col p-6 bg-gradient-to-r from-indigo-500 to-blue-600 gap-5 sm:gap-7 sm:p-8 lg:gap-10 lg:p-12 ">
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
          <div className="w-full lg:w-[70%] mx-auto grid grid-cols-3 text-center gap-4">
            <div className="button-pt">
              <p>Clienti</p>

              <h3 className="font-semibold text-2xl">2</h3>
            </div>
            <div className="button-pt">
              <p>
                Impegni <span className="hidden sm:inline">giornalieri</span>
              </p>
              <h3 className="font-semibold text-2xl">2</h3>
            </div>
            <div className="button-pt">
              <p>Notifiche</p>

              <h3 className="font-semibold text-2xl">2</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
