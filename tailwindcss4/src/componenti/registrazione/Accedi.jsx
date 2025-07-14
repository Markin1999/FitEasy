import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Accedi() {
  const [utente, setUtente] = useState({
    businessEmail: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const navTo = useNavigate();

  //---
  //Serve per impostare un timeout ai messaggi di errori.
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUtente((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-12 p-0">
      <form
        className="w-5xs rounded-md p-3 flex flex-col justify-center items-center gap-3 border-icona bg-gradient-to-br from-[#d2f6c5] via-[#b0eacd] to-[#cce3ff] shadow-lg sm:w-[75%] lg:w-[40%]"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-end mb-3 cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] sm:h-[30px] lg:h-[30px]"
            viewBox="6 6 12 12"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              navTo("/");
            }}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className="text-center px-3 pb-3 sm:mb-3 ">
          <h1 className="font-bold text-testo mb-2 sm:mb-6">
            Accedi a FitEasy{" "}
          </h1>
        </div>
        <div className="flex flex-col w-full ">
          <label htmlFor="email" className="font-semibold text-testo">
            EMAIL
            <span className="w-[0.0625rem] h-[0.0625rem]">*</span>
          </label>
          <input
            type="email"
            name="businessEmail"
            value={utente.businessEmail}
            onChange={handleChange}
            className=" border-b border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            required
          ></input>
        </div>

        <div className="w-full flex flex-col ">
          <label htmlFor="password" className="font-semibold text-testo">
            PASSWORD<span className="w-[0.0625rem] h-[0.0625rem]">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={utente.password}
            onChange={handleChange}
            className="  border-b border-testo hover:border-testo rounded-md px-4 py-2 text-[12px] sm:text-[14px] lg:text-[16px] lg:h-16 "
            required
          ></input>
        </div>

        {message && <p>{message}</p>}

        <button
          className="text-2xl   w-full font-bold my-3 border border-bottone bg-bottone text-white rounded-md px-4 py-2 sm:my-6 sm:py-4 sm:text-3xl lg:py-3 "
          type="submit"
        >
          Accedi
        </button>
      </form>
    </div>
  );
}
