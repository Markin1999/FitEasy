//Il json dovrà essere cosi:
/*[
  {
    "giorno": 1,
    "totale": 12,
    "acquisiti": 3,
    "scaduti": 1
  },
  {
    "giorno": 2,
    "totale": 14,
    "acquisiti": 4,
    "scaduti": 0
  }
] */

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const generateData = () => {
  let totale = 10;
  return Array.from({ length: 30 }, (_, i) => {
    const acquisiti = Math.floor(Math.random() * 4) + 1;
    const scaduti = Math.floor(Math.random() * 3);
    totale += acquisiti - scaduti;
    return {
      giorno: i + 1,
      totale,
      acquisiti,
      scaduti,
    };
  });
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 shadow-lg text-xs">
      <p className="text-white font-semibold mb-1">Giorno {label}</p>
      <p className="text-orange-400">
        Totale clienti: <span className="font-bold">{d.totale}</span>
      </p>
      <p className="text-green-400 opacity-70">+ Acquisiti: {d.acquisiti}</p>
      <p className="text-red-400 opacity-70">− Scaduti: {d.scaduti}</p>
    </div>
  );
};

export default function ContainerPrincipale() {
  const [data] = useState(generateData);

  const { min, max, corrente } = useMemo(() => {
    const vals = data.map((d) => d.totale);
    return {
      min: Math.min(...vals),
      max: Math.max(...vals),
      corrente: vals[vals.length - 1],
    };
  }, [data]);

  const salita = corrente >= data[0].totale;
  const lineColor = salita ? "#22c55e" : "#ef4444";
  const fillId = "gradTotale";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full max-w-2xl">
      {/* Titolo */}
      <h3 className="text-testo text-center font-bold text-base tracking-tight mb-2">
        CRESCITA AZIENDALE
      </h3>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart
          data={data}
          margin={{ top: 6, right: 4, left: -12, bottom: 0 }}
        >
          <defs>
            <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={0.25} />
              <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis
            dataKey="giorno"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={false}
            interval={4}
            label={{
              value: "Giorni",
              position: "insideBottomRight",
              offset: -2,
              style: { fill: "#9ca3af", fontSize: 11 },
            }}
          />
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[Math.max(0, min - 2), max + 2]}
            allowDecimals={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <ReferenceLine
            y={data[0].totale}
            stroke="#d1d5db"
            strokeDasharray="4 3"
            label={{
              value: "Partenza",
              position: "right",
              style: { fill: "#9ca3af", fontSize: 10 },
            }}
          />

          <Area
            type="monotone"
            dataKey="totale"
            stroke={lineColor}
            strokeWidth={2.5}
            fill={`url(#${fillId})`}
            dot={false}
            activeDot={{
              r: 4,
              fill: lineColor,
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-5 mt-3">
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: lineColor }}
          />
          <span className="text-gray-500 text-xs">Totale clienti attivi</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-5 border-t border-dashed border-gray-300" />
          <span className="text-gray-500 text-xs">
            Partenza ({data[0].totale})
          </span>
        </div>
      </div>
    </div>
  );
}
