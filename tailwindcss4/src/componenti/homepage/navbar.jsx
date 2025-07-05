import { useState } from "react";

export function Navbar() {
  const [clickBurger, setClickBurger] = useState(false);

  const handleClickBurger = () => {
    setClickBurger(!clickBurger); //In questo modo si avvia un toggle on/off
  };

  return (
    <nav className="bg-testo py-3 px-12 gap-2">
      <div className="flex justify-between">
        <div className="h-max ">
          <img
            src="../../src/assets/logo/logo.svg"
            className="h-[60px] items-center md:h-[80px]"
            alt=""
          />
        </div>

        <div className="hidden md:flex items-center gap-4 hover:cursor-pointer">
          <a className=" text-titolo">ACCEDI</a>
          <button className="p-5 font-bold bg-bottone text-white rounded-md inline-block">
            ISCRIVITI ORA
          </button>
        </div>
        <div
          className="md:hidden flex justify-center items-center hover:cursor-pointer "
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
      {clickBurger && <div className="md:hidden"></div>}
    </nav>
  );
}
