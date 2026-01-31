import { Bell, Settings, User, Calendar, Building2 } from "lucide-react";

export function HeaderPt() {
  const notifiche = 32;
  const scadenze = 6;
  const clienti = 32;

  return (
    <header className="hidden sm:block fixed top-0 right-0 left-[70px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo aziendale al centro */}
          <div className="flex items-center gap-4 flex-1">
            <div className="flex flex-col">
              <h1 className="text-base font-semibold text-gray-900 tracking-tight">
                FitEasy
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <User className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{clienti}</span>{" "}
                  clienti
                </span>
              </div>
            </div>
          </div>

          {/* Actions a destra */}
          <div className="flex items-center gap-3">
            <button
              aria-label="In scadenza"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-testo font-medium text-sm group relative"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors relative">
                <Calendar className="h-4 w-4" />
                {scadenze > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {scadenze}
                  </span>
                )}
              </span>
              <span className="hidden lg:inline">Scadenze</span>
            </button>

            <button
              aria-label="Notifiche"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-testo font-medium text-sm group relative"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors relative">
                <Bell className="h-4 w-4" />
                {notifiche > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {notifiche}
                  </span>
                )}
              </span>
              <span className="hidden lg:inline">Notifiche</span>
            </button>

            <button
              aria-label="Impostazioni"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-testo font-medium text-sm group"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Settings className="h-4 w-4" />
              </span>
              <span className="hidden lg:inline">Impostazioni</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
