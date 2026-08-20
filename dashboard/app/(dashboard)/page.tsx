"use client";

import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { TrendingUp, TrendingDown, Scale, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRealtimeTable } from "@/lib/hooks/useRealtimeTable";
import { Gasto, Ingreso } from "@/lib/types";
import { formatMoney } from "@/lib/format";
import { StatCard } from "@/components/StatCard";
import { Card } from "@/components/ui";

type Periodo = "mes" | "anio";

function inRange(dateStr: string, start: Date, end: Date) {
  const d = new Date(dateStr);
  return d >= start && d < end;
}

export default function ResumenPage() {
  const { rows: gastos, loading: loadingGastos } = useRealtimeTable<Gasto>("sp_gastos");
  const { rows: ingresos, loading: loadingIngresos } = useRealtimeTable<Ingreso>("sp_ingresos");
  const [periodo, setPeriodo] = useState<Periodo>("mes");

  const loading = loadingGastos || loadingIngresos;

  const stats = useMemo(() => {
    const now = new Date();
    let currentStart: Date, currentEnd: Date, prevStart: Date, prevEnd: Date;

    if (periodo === "mes") {
      currentStart = new Date(now.getFullYear(), now.getMonth(), 1);
      currentEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      prevStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      prevEnd = currentStart;
    } else {
      currentStart = new Date(now.getFullYear(), 0, 1);
      currentEnd = new Date(now.getFullYear() + 1, 0, 1);
      prevStart = new Date(now.getFullYear() - 1, 0, 1);
      prevEnd = currentStart;
    }

    const sumHNL = (arr: { total: number; moneda: string; fecha_registro: string }[], start: Date, end: Date) =>
      arr
        .filter((r) => r.moneda === "HNL" && inRange(r.fecha_registro, start, end))
        .reduce((s, r) => s + Number(r.total), 0);

    const otrasMonedas = (arr: { total: number; moneda: string; fecha_registro: string }[], start: Date, end: Date) => {
      const map = new Map<string, number>();
      arr
        .filter((r) => r.moneda !== "HNL" && inRange(r.fecha_registro, start, end))
        .forEach((r) => map.set(r.moneda, (map.get(r.moneda) ?? 0) + Number(r.total)));
      return Array.from(map.entries());
    };

    const ingresosActual = sumHNL(ingresos, currentStart, currentEnd);
    const gastosActual = sumHNL(gastos, currentStart, currentEnd);
    const ingresosPrev = sumHNL(ingresos, prevStart, prevEnd);
    const gastosPrev = sumHNL(gastos, prevStart, prevEnd);
    const margenActual = ingresosActual - gastosActual;
    const margenPrev = ingresosPrev - gastosPrev;

    const pctChange = (actual: number, prev: number) => {
      if (prev === 0) return actual > 0 ? 100 : 0;
      return ((actual - prev) / Math.abs(prev)) * 100;
    };

    // tendencia: ultimos 6 meses
    const trend = [];
    for (let i = 5; i >= 0; i--) {
      const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
      trend.push({
        mes: start.toLocaleDateString("es-HN", { month: "short" }),
        Ingresos: sumHNL(ingresos, start, end),
        Gastos: sumHNL(gastos, start, end),
      });
    }

    // top categorias de gasto (periodo actual)
    const catMap = new Map<string, number>();
    gastos
      .filter((g) => g.moneda === "HNL" && inRange(g.fecha_registro, currentStart, currentEnd))
      .forEach((g) => {
        const cat = g.categoria || "Otros";
        catMap.set(cat, (catMap.get(cat) ?? 0) + Number(g.total));
      });
    const topCategorias = Array.from(catMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    // top clientes por ingresos (periodo actual)
    const cliMap = new Map<string, number>();
    ingresos
      .filter((i) => i.moneda === "HNL" && inRange(i.fecha_registro, currentStart, currentEnd))
      .forEach((i) => {
        const cli = i.cliente || "Sin nombre";
        cliMap.set(cli, (cliMap.get(cli) ?? 0) + Number(i.total));
      });
    const topClientes = Array.from(cliMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const noRevisadasGastos = gastos.filter((g) => g.estado_revision !== "revisado").length;
    const noRevisadasIngresos = ingresos.filter((i) => i.estado_revision !== "revisado").length;

    return {
      ingresosActual,
      gastosActual,
      margenActual,
      margenPct: ingresosActual > 0 ? (margenActual / ingresosActual) * 100 : 0,
      ingresosDelta: pctChange(ingresosActual, ingresosPrev),
      gastosDelta: pctChange(gastosActual, gastosPrev),
      margenDelta: pctChange(margenActual, margenPrev),
      otrasIngresos: otrasMonedas(ingresos, currentStart, currentEnd),
      otrasGastos: otrasMonedas(gastos, currentStart, currentEnd),
      trend,
      topCategorias,
      topClientes,
      noRevisadasGastos,
      noRevisadasIngresos,
    };
  }, [gastos, ingresos, periodo]);

  if (loading) {
    return <div className="text-gray-400 dark:text-pink-300/50 py-12 text-center">Cargando...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-pink-200">Resumen</h1>
          <p className="text-gray-500 dark:text-pink-300/60 text-sm mt-1">
            Vista general del negocio
          </p>
        </div>
        <div className="inline-flex bg-white dark:bg-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-800 self-start">
          {(["mes", "anio"] as Periodo[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriodo(p)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                periodo === p
                  ? "bg-pink-500 text-white"
                  : "text-gray-500 dark:text-pink-300/70"
              }`}
            >
              {p === "mes" ? "Este mes" : "Este año"}
            </button>
          ))}
        </div>
      </div>

      {(stats.noRevisadasGastos > 0 || stats.noRevisadasIngresos > 0) && (
        <div className="flex flex-wrap gap-3">
          {stats.noRevisadasGastos > 0 && (
            <Link
              href="/gastos"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
            >
              <AlertCircle size={16} />
              {stats.noRevisadasGastos} gasto{stats.noRevisadasGastos !== 1 && "s"} por revisar
            </Link>
          )}
          {stats.noRevisadasIngresos > 0 && (
            <Link
              href="/ingresos"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
            >
              <AlertCircle size={16} />
              {stats.noRevisadasIngresos} ingreso{stats.noRevisadasIngresos !== 1 && "s"} por revisar
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Ingresos"
          value={formatMoney(stats.ingresosActual)}
          icon={<TrendingUp size={20} />}
          deltaPct={stats.ingresosDelta}
        />
        <StatCard
          label="Gastos"
          value={formatMoney(stats.gastosActual)}
          icon={<TrendingDown size={20} />}
          deltaPct={stats.gastosDelta}
          invertDeltaTone
        />
        <StatCard
          label={`Margen (${stats.margenPct.toFixed(0)}%)`}
          value={formatMoney(stats.margenActual)}
          icon={<Scale size={20} />}
          deltaPct={stats.margenDelta}
          tone={stats.margenActual >= 0 ? "positive" : "negative"}
        />
      </div>

      {(stats.otrasIngresos.length > 0 || stats.otrasGastos.length > 0) && (
        <p className="text-xs text-gray-400 dark:text-pink-300/50">
          También hubo movimientos en otra moneda este periodo:{" "}
          {stats.otrasIngresos.map(([m, v]) => `+${formatMoney(v, m)} (ingresos)`).join(", ")}
          {stats.otrasIngresos.length > 0 && stats.otrasGastos.length > 0 && ", "}
          {stats.otrasGastos.map(([m, v]) => `-${formatMoney(v, m)} (gastos)`).join(", ")}
        </p>
      )}

      <Card className="p-6">
        <h2 className="text-lg font-serif font-bold text-gray-900 dark:text-pink-200 mb-4">
          Tendencia mensual
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={stats.trend}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-100 dark:stroke-gray-800" />
            <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="currentColor" className="text-gray-400" />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="currentColor"
              className="text-gray-400"
              tickFormatter={(v) => `L${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number) => formatMoney(value)}
              contentStyle={{ borderRadius: 12, border: "1px solid #f3f4f6" }}
            />
            <Line type="monotone" dataKey="Ingresos" stroke="#14b8a6" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="Gastos" stroke="#f472b6" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 dark:text-pink-200 mb-4">
            Top categorías de gasto
          </h2>
          {stats.topCategorias.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-pink-300/50">Sin datos este periodo</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={stats.topCategorias.map(([name, value]) => ({ name, value }))} layout="vertical">
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={130}
                  tick={{ fontSize: 12 }}
                  stroke="currentColor"
                  className="text-gray-500"
                />
                <Tooltip formatter={(value: number) => formatMoney(value)} />
                <Bar dataKey="value" fill="#f472b6" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 dark:text-pink-200 mb-4">
            Top clientes por ingresos
          </h2>
          {stats.topClientes.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-pink-300/50">Sin datos este periodo</p>
          ) : (
            <ul className="space-y-3">
              {stats.topClientes.map(([nombre, total], i) => (
                <li key={nombre} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-300 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-pink-100">{nombre}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-pink-200">
                    {formatMoney(total)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
