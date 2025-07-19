import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavbarPt() {
  const [clickBurger, setClickBurger] = useState(false);
  const navTo = useNavigate();

  const handleClickBurger = () => {
    setClickBurger(!clickBurger); //In questo modo si avvia un toggle on/off
  };

  return (
    <nav className="bg-testo gap-2 px-5 py-2  fixed w-full sm:px-12 md:py-0 lg:py-3 ">
      <div className="flex">
        <div className="w-full justify-center items-center gap-4 md:grid md:grid-cols-3  ">
          <div className="h-full ">
            <img
              src="../../src/assets/logo/logo.svg"
              className="h-[60px] w-[60px] md:h-[80px] md:w-[60px] lg:w-[90px] "
              alt=""
            />
          </div>
          <ul className="hidden justify-center text-white md:gap-5 md:flex lg:gap-8  ">
            <li>DASHBOARD</li>
            <li>CLIENTI</li>
            <li>CALENDARIO</li>
            <li>NOTIFICHE</li>
            <li>PROFILO</li>
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
        <div className="flex flex-col">
          <hr className="pb-4 text-sfondo" />
          <div className="flex flex-col items-end ">
            <ul className=" text-white text-right">
              <li className="py-0.5">DASHBOARD</li>
              <li className="py-0.5">CLIENTI</li>
              <li className="py-0.5">CALENDARIO</li>
              <li className="py-0.5">NOTIFICHE</li>
              <li className="py-0.5">PROFILO</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
