import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  Calendar,
  Bell,
  User as UserIcon,
} from "lucide-react";

export function NavbarPt() {
  const [isOpen, setIsOpen] = useState(false);
  const navTo = useNavigate();
  const nomeAzienda = "FitEasy";

  const navLinks = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "clienti", label: "Clienti", icon: Users },
    { id: "calendario", label: "Calendario", icon: Calendar },
    { id: "notifiche", label: "Notifiche", icon: Bell },
    { id: "profilo", label: "Profilo", icon: UserIcon },
  ];

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="w-10"></div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-base font-semibold text-gray-900 tracking-tight">
            {nomeAzienda}
          </h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200 bg-white">
          <ul className="py-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <li
                  key={link.id}
                  style={{
                    animation: isOpen
                      ? `slideDown 0.3s ease-out ${index * 0.05}s both`
                      : "none",
                  }}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full flex justify-end px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-3 w-33">
                      <Icon className="w-5 h-5 text-gray-500" />
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
