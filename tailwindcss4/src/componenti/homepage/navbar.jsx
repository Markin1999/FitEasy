export function Navbar() {
  return (
    <nav className="bg-testo py-3 px-12 gap-2">
      <div className="flex justify-between">
        <div className="h-max ">
          <img
            src="../../src/assets/logo/logo.svg"
            className="h-[80px] items-center"
            alt=""
          />
        </div>

        <div className="flex items-center gap-4 hover:cursor-pointer">
          <a className=" text-titolo">ACCEDI</a>
          <button className="p-5 font-bold bg-bottone text-white rounded-md inline-block">
            ISCRIVITI ORA
          </button>
        </div>
      </div>
    </nav>
  );
}
