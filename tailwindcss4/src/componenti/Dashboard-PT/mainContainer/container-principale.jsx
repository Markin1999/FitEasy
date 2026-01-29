export function ContainerPrincipale() {
  return (
    <div
      id="container-principale-dashboard-pt"
      className="rounded-2xl border border-testo bg-white p-4 md:p-6 lg:p-8"
    >
      <ul className="flex gap-4 text-testo md:flex-row md:items-center md:justify-between md:gap-6 md:divide-x md:divide-testo">
        <li className="flex flex-col items-center gap-1 text-center md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 md:text-xs lg:text-sm">
            Clienti attivi
          </span>
          <span className="text-lg font-semibold text-gray-700 md:text-xl lg:text-2xl">
            32
          </span>
        </li>
        <li className="flex flex-col items-center gap-1 text-center md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 md:text-xs lg:text-sm">
            Notifiche
          </span>
          <span className="text-lg font-semibold text-gray-700 md:text-xl lg:text-2xl">
            5
          </span>
        </li>
        <li className="flex flex-col items-center gap-1 text-center md:flex-1 md:px-4">
          <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 md:text-xs lg:text-sm">
            Scadenza
          </span>
          <span className="text-lg font-semibold text-gray-700 md:text-xl lg:text-2xl">
            12
          </span>
        </li>
      </ul>
    </div>
  );
}
