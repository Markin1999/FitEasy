export function Navbar() {
  return (
    <nav className="bg-testo p-3 flex">
      <div className="h-[90%] flex-9/12">
        <img
          src="../../src/assets/logo/logo.svg"
          className="ml-3 w-[173px] h-[80px]"
          alt=""
        />
      </div>

      <div>
        <a>Accedi</a>
        <button className=" font-bold bg-bottone text-white rounded-r-md px-4 py-2 flex-3/12">
          Iscriviti ora
        </button>
      </div>
    </nav>
  );
}
