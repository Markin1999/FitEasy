import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavbarPt() {
  const [clickBurger, setClickBurger] = useState(false);
  const navTo = useNavigate();

  const handleClickBurger = () => {
    setClickBurger(!clickBurger); //In questo modo si avvia un toggle on/off
  };

  return (
    <nav className="bg-testo gap-2 px-5 py-3 fixed w-full sm:px-12  ">
      <div className="flex">
        <div className="hidden w-full justify-center items-center gap-4 hover:cursor-pointer md:grid md:grid-cols-3">
          <div className="h-full ">
            <img
              src="../../src/assets/logo/logo.svg"
              className="h-[60px] md:h-[80px]"
              alt=""
            />
          </div>
          <ul className="flex justify-center text-white gap-8  ">
            <li>Dashboard</li>
            <li>Clienti</li>
            <li>Calendario</li>
            <li>Notifiche</li>
            <li>Profilo</li>
          </ul>
          <div></div>
        </div>
        <div
          className=" flex justify-center items-center hover:cursor-pointer sm:hidden"
          onClick={handleClickBurger}
        >
          <svg
            className="w-6 h-6 text-titolo"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {clickBurger && (
        <div className="flex flex-col sm:hidden py-4">
          <hr className="pb-4 text-sfondo" />
          <div className="flex flex-col items-end gap-4 hover:cursor-pointer">
            <a
              className=" text-titolo pr-4"
              onClick={() => {
                navTo("/accedi");
              }}
            >
              ACCEDI
            </a>
            <button
              onClick={() => {
                navTo("/registrazione");
              }}
              className="p-3 m-0 font-bold bg-bottone text-white rounded-md inline-block"
            >
              ISCRIVITI ORA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
