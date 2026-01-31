import React from "react";

export function ContainerImpegni() {
  const impegni = [
    {
      id: 1,
      titolo: "Allenamento personal con Luca",
      data: "2026-01-31",
      orario: "14:30 - 15:30",
      categoria: "Lavoro",
      colore: "blue",
      tipo: "oggi",
    },
    {
      id: 2,
      titolo: "Sessione forza con Martina",
      data: "2026-01-31",
      orario: "18:00 - 19:00",
      categoria: "Sport",
      colore: "green",
      tipo: "oggi",
    },
    {
      id: 3,
      titolo: "Cena veloce post-lavoro",
      data: "2026-01-31",
      orario: "20:30",
      categoria: "Personale",
      colore: "purple",
      tipo: "oggi",
    },
    // Settimana
    {
      id: 4,
      titolo: "Valutazione iniziale nuovo cliente",
      data: "2026-02-03",
      giorno: "Martedì",
      orario: "16:00",
      categoria: "Studio",
      colore: "pink",
      tipo: "settimana",
    },
    {
      id: 5,
      titolo: "Controllo postura e mobilità",
      data: "2026-02-05",
      giorno: "Giovedì",
      orario: "10:00",
      categoria: "Personale",
      colore: "purple",
      tipo: "settimana",
    },
    {
      id: 6,
      titolo: "Allenamento coppia (PT)",
      data: "2026-02-06",
      giorno: "Venerdì",
      orario: "15:00",
      categoria: "Lavoro",
      colore: "blue",
      tipo: "settimana",
    },
    {
      id: 7,
      titolo: "Sessione cardio leggera cliente",
      data: "2026-02-06",
      giorno: "Venerdì",
      orario: "19:00",
      categoria: "Personale",
      colore: "purple",
      tipo: "settimana",
    },
    {
      id: 8,
      titolo: "Allenamento funzionale di gruppo",
      data: "2026-02-07",
      giorno: "Sabato",
      orario: "10:30",
      categoria: "Sport",
      colore: "green",
      tipo: "settimana",
    },
    // Mese
    {
      id: 9,
      titolo: "Workshop PT e nutrizione",
      data: "2026-02-15",
      dataFormattata: "15 Feb",
      categoria: "Lavoro",
      colore: "blue",
      tipo: "mese",
    },
    {
      id: 10,
      titolo: "Check progressi cliente long-term",
      data: "2026-02-20",
      dataFormattata: "20 Feb",
      categoria: "Personale",
      colore: "purple",
      tipo: "mese",
    },
    {
      id: 11,
      titolo: "Aggiornamento programmi clienti",
      data: "2026-02-28",
      dataFormattata: "28 Feb",
      categoria: "Urgente",
      colore: "amber",
      tipo: "mese",
    },
    {
      id: 12,
      titolo: "Rinnovo abbonamento palestra PT",
      data: "2026-02-25",
      dataFormattata: "25 Feb",
      categoria: "Sport",
      colore: "green",
      tipo: "mese",
    },
  ];

  const [vista, setVista] = React.useState("oggi");

  const getColoreClasse = (colore) => {
    const colori = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700",
      amber: "bg-amber-100 text-amber-700",
      pink: "bg-pink-100 text-pink-700",
    };
    return colori[colore] || "bg-gray-100 text-gray-700";
  };

  const getTitolo = () => {
    if (vista === "oggi") return "IMPEGNI (OGGI)";
    if (vista === "settimana") return "IMPEGNI (SETTIMANA)";
    return "IMPEGNI (MESE)";
  };

  const getImpegniFiltrati = () => {
    if (vista === "oggi") {
      return impegni.filter((i) => i.tipo === "oggi");
    }
    if (vista === "settimana") {
      return impegni.filter((i) => i.tipo === "oggi" || i.tipo === "settimana");
    }
    return impegni.filter((i) => i.tipo === "mese");
  };

  const avanti = () => {
    if (vista === "oggi") setVista("settimana");
    else if (vista === "settimana") setVista("mese");
    else setVista("oggi");
  };

  const indietro = () => {
    if (vista === "oggi") setVista("mese");
    else if (vista === "settimana") setVista("oggi");
    else setVista("settimana");
  };

  return (
    <div
      id="container-impegni-dashboard-pt"
      className="w-full h-[270px] bg-white rounded-lg shadow-md border border-slate-200 p-6 overflow-hidden flex flex-col md:h-[540px]"
    >
      {/* Header con navigazione */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={indietro}
          className="text-slate-400 hover:text-slate-600 transition-colors text-lg"
        >
          ←
        </button>
        <h3 className="text-xs font-bold color-testo uppercase">
          {getTitolo()}
        </h3>
        <button
          onClick={avanti}
          className="text-slate-600 hover:text-slate-800 transition-colors text-lg"
        >
          →
        </button>
      </div>

      {/* Lista impegni */}
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin">
        {getImpegniFiltrati().map((impegno) => (
          <div
            key={impegno.id}
            className="bg-slate-50 rounded-lg p-2 border border-slate-100"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-testo text-xs truncate">
                  {impegno.titolo}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {vista === "oggi" && impegno.orario}
                  {vista === "settimana" &&
                    impegno.giorno &&
                    `${impegno.giorno} - ${impegno.orario}`}
                  {vista === "settimana" && !impegno.giorno && impegno.orario}
                  {vista === "mese" && impegno.dataFormattata}
                </p>
              </div>
              <span
                className={`px-2 py-0.5 ${getColoreClasse(impegno.colore)} rounded text-[10px] font-medium whitespace-nowrap flex-shrink-0`}
              >
                {impegno.categoria}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
