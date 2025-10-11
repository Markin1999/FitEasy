export function SidebarPt() {
  return (
    <aside className="fixed inset-y-0 left-0 [w-90px] bg-white py-8 pl-4 pr-4 border-r border-gray-200">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex h-16 items-center sm:justify-center md:mr-0 md:justify-end">
          <img
            src="../../src/assets/logo/logo.png"
            alt="Fit-Easy logo"
            className="m-1 block h-[60px] w-[80px] p-0 md:m-3 md:h-[90px] md:w-auto lg:h-[90px] lg:w-auto"
          />
        </div>

        <nav className="mt-6 flex-1">
          <ul className="flex flex-col gap-4 text-testo font-semibold">
            <li className="li-pt-navbar">DASHBOARD</li>
            <li className="li-pt-navbar">CLIENTI</li>
            <li className="li-pt-navbar">CALENDARIO</li>
            <li className="li-pt-navbar">NOTIFICHE</li>
            <li className="li-pt-navbar">PERSONALIZZATE</li>
            <li className="li-pt-navbar">PROFILO</li>
          </ul>
        </nav>

        <div className="mt-auto flex h-16 items-center justify-center">
          {/* Extra actions (logout, settings, etc.) */}
        </div>
      </div>
    </aside>
  );
}
