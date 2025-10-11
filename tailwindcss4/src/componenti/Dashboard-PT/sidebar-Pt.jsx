export function SidebarPt() {
  return (
    <aside className="fixed inset-y-0 left-0 [w-90px] bg-white py-8 lg:pl-2 lg:pr-4 border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center  h-16  mb-4 sm:justify-center md:justify-end md:mr-0 lg:mr-2">
          <img
            src="../../src/assets/logo/logo.png"
            alt="Fit-Easy logo"
            className="block h-[60px] w-[80px] m-1 p-0 md:h-[90px] md:w-auto md:m-3 lg:h-[90px] lg:w-auto"
          />
        </div>

        <nav className="flex-1 mt-6">
          <ul className="flex flex-col gap-4 text-testo font-semibold">
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                DASHBOARD
              </span>
            </li>
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                CLIENTI
              </span>
            </li>
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                CALENDARIO
              </span>
            </li>
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                NOTIFICHE
              </span>
            </li>
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                PERSONALIZZATE
              </span>
            </li>
            <li className="group">
              <span className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 group-hover:bg-white/15">
                <span
                  className="h-2 w-2 rounded-full bg-white/40 transition-transform duration-150 group-hover:scale-125 group-hover:bg-
  white"
                />
                PROFILO
              </span>
            </li>
          </ul>
        </nav>

        <div className="mt-auto flex items-center justify-center h-16">
          {/* Extra actions (logout, settings, etc.) */}
        </div>
      </div>
    </aside>
  );
}
