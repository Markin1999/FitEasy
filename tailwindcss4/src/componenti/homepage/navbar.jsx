export function Navbar() {
  return (
    <nav className="bg-testo p-3 gap-2">
      <div className="flex justify-between">
        <div className="h-[90%] ">
          <img
            src="../../src/assets/logo/logo.svg"
            className="w-[173px] h-[80px] items-center"
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <a>Accedi</a>
          <button className=" font-bold bg-bottone text-white rounded-2xl px-4 py-2">
            Iscriviti ora
          </button>
        </div>
      </div>
    </nav>
  );
}
