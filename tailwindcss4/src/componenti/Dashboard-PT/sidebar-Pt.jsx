import { Home, Users, Calendar, Bell, Sparkles, User } from "lucide-react";
import { useState } from "react";

export function SidebarPt() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: "dashboard", label: "DASHBOARD", icon: Home },
    { id: "clienti", label: "CLIENTI", icon: Users },
    { id: "calendario", label: "CALENDARIO", icon: Calendar },
    { id: "notifiche", label: "NOTIFICHE", icon: Bell },
    { id: "personalizzate", label: "PERSONALIZZATE", icon: Sparkles },
    { id: "profilo", label: "PROFILO", icon: User },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-[70px] hover:w-[200px] py-8 px-3 transition-all duration-300 ease-in-out group">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex h-16 items-center justify-center overflow-hidden">
          <img
            src="../../src/assets/logo/logo.png"
            alt="Fit-Easy logo"
            className="h-[50px] w-[50px] object-contain transition-all duration-300 group-hover:h-[60px] group-hover:w-[80px]"
          />
        </div>

        <nav className="mt-6 flex-1">
          <ul className="flex flex-col gap-4 text-testo font-semibold">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="li-pt flex items-center cursor-pointer hover:text-blue-600 transition-colors overflow-hidden whitespace-nowrap"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className=" flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
