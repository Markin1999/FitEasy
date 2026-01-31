export function ContainerPrincipale() {
  return (
    <div
      id="container-principale-dashboard-pt"
      className="rounded-2xl border border-testo bg-white p-6 md:p-6 lg:p-8"
    >
      <ul className="flex gap-6 text-testo md:flex-row md:items-center md:justify-between md:gap-6">
        <li className="flex flex-col items-center gap-2 text-center flex-1 md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 lg:text-sm">
            Clienti attivi
          </span>
          <span className="text-xl font-bold text-gray-700 md:text-xl lg:text-2xl">
            32
          </span>
        </li>

        <span className=" md:block h-12 border-l border-dashed border-testo"></span>

        <li className="flex flex-col items-center gap-2 text-center flex-1 md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 lg:text-sm">
            Notifiche
          </span>
          <span className="text-xl font-bold text-gray-700 md:text-xl lg:text-2xl">
            5
          </span>
        </li>

        <span className=" md:block h-12 border-l border-dashed border-testo"></span>

        <li className="flex flex-col items-center gap-2 text-center flex-1 md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 lg:text-sm">
            Scadenza
          </span>
          <span className="text-xl font-bold text-gray-700 md:text-xl lg:text-2xl">
            12
          </span>
        </li>
      </ul>
    </div>
  );
}
