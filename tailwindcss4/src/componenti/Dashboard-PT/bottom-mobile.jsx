import { Home, Users, Calendar, Bell } from "lucide-react";
import { useState } from "react";

export function BottomBarPt() {
  const [activeTab, setActiveTab] = useState("home");
  const notifiche = 16;
  const clienti = 32;

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "clienti", label: "Clienti", icon: Users, badge: clienti },
    { id: "calendario", label: "Calendario", icon: Calendar },
    { id: "notifiche", label: "Notifiche", icon: Bell, badge: notifiche },
  ];

  return (
    <div className="flex items-center justify-around h-16 px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center justify-center gap-1 flex-1 py-2 relative"
          >
            <div className="relative">
              <Icon
                className={`h-6 w-6 transition-colors ${
                  isActive ? "text-gray-900" : "text-gray-400"
                }`}
              />
              {tab.badge && tab.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {tab.badge > 99 ? "99+" : tab.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium transition-colors ${
                isActive ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
