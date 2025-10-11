import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavbarPt() {
  const [clickBurger, setClickBurger] = useState(false);
  const navTo = useNavigate();
  const navLinks = [
    { id: "dashboard", label: "Dashboard" },
    { id: "clienti", label: "Clienti" },
    { id: "calendario", label: "Calendario" },
    { id: "notifiche", label: "Notifiche" },
    { id: "profilo", label: "Profilo" },
  ];

  const handleClickBurger = () => {
    setClickBurger(!clickBurger);
  };

  return (
    <nav className="bg-white gap-2 px-5 py-2  fixed w-full sm:px-12 md:py-0 lg:py-3 ">
      <div className="flex">
        <div className="w-full justify-center items-center gap-4 md:grid md:grid-cols-3  ">
          <div className="h-full ">
            <img
              src="../../src/assets/logo/logo.png"
              alt="Fit-Easy logo"
              className="block h-[60px] w-[80px] m-1 p-0 md:h-[90px] md:w-auto md:m-3 lg:h-[90px] lg:w-auto"
            />
          </div>
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
          <hr className="pb-4 text-testo" />
          <div className="flex flex-col items-end ">
            <ul className="text-testo text-left space-y-2 w-fit">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="li-pt-navbar"
                  role="button"
                  tabIndex={0}
                >
                  <span className="li-pt-navbar__label">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
