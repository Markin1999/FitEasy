import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderPt() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navTo = useNavigate();

  return (
    <header className="flex w-full pt-[79px] sm:pt-0">
      <div className="w-full flex flex-col bg-white border-black gap-5 sm:gap-7 sm:p-8 lg:gap-10 lg:p-12 ">
        <div className="flex justify-end">
          <div
            className="flex items-center 
           text-testo"
          >
            <div
              aria-label="Notifiche"
              className="container-notifiche-header-pt"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19a2 2 0 0 0 1.985-1.75L14 17H10a2 2 0 0 0 1.85 1.994L12 19Zm7-5h-1V11a6 6 0 0 0-5-5.917V4a1 1 0 0 0-2 0v1.083A6 6 0 0 0 6 11v3H5a1 1 0 0 0-.117 1.993L5 16h14a1 1 0 0 0 .117-1.993L19 14Z"
                  />
                </svg>
              </span>
              Notifiche
            </div>

            <div
              aria-label="Impostazioni"
              className="container-notifiche-header-pt"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.4 15a1 1 0 0 1 .2 1.09l-1 1.73a1 1 0 0 1-1.08.46l-1.8-.36a7 7 0 0 1-1.65.96l-.27 1.82a1 1 0 0 1-.99.85h-2a1 1 0 0 1-.99-.85l-.27-1.82a7 7 0 0 1-1.65-.96l-1.8.36a1 1 0 0 1-1.08-.46l-1-1.73a1 1 0 0 1 .2-1.09l1.54-1.34a7 7 0 0 1 0-1.93L4.6 8.99a1 1 0 0 1-.2-1.09l1-1.73a1 1 0 0 1 1.08-.46l1.8.36a7 7 0 0 1 1.65-.96L10.2 3.3a1 1 0 0 1 .99-.85h2a1 1 0 0 1 .99.85l.27 1.82a7 7 0 0 1 1.65.96l1.8-.36a1 1 0 0 1 1.08.46l1 1.73a1 1 0 0 1-.2 1.09l-1.54 1.34c.08.63.08 1.3 0 1.93L19.4 15Z"
                  />
                </svg>
              </span>
              Impostazioni
            </div>

            <div
              aria-label="Profilo utente"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white text-xs font-bold transition"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-grey/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 19a6 6 0 0 1 12 0"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
