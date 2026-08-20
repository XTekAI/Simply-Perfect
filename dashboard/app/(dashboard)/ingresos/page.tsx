"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Check, Loader2, Pencil } from "lucide-react";
import { useRealtimeTable } from "@/lib/hooks/useRealtimeTable";
import { Ingreso } from "@/lib/types";
import { formatMoney, formatDate } from "@/lib/format";
import { Card, EstadoBadge, ConfianzaBadge } from "@/components/ui";
import { marcarRevisado } from "@/lib/n8n";
import { EditInvoiceModal } from "@/components/EditInvoiceModal";

type Filtro = "todos" | "no_revisado" | "revisado";

export default function IngresosPage() {
  const { rows, loading } = useRealtimeTable<Ingreso>("sp_ingresos");
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [marcando, setMarcando] = useState<string | null>(null);
  const [editando, setEditando] = useState<Ingreso | null>(null);

  const filtrados = useMemo(() => {
    if (filtro === "todos") return rows;
    if (filtro === "revisado") return rows.filter((r) => r.estado_revision === "revisado");
    return rows.filter((r) => r.estado_revision !== "revisado");
  }, [rows, filtro]);

  const totalPeriodo = filtrados
    .filter((r) => r.moneda === "HNL")
    .reduce((s, r) => s + Number(r.total), 0);

  async function handleMarcar(id: string) {
    setMarcando(id);
    try {
      await marcarRevisado("ingresos", id);
    } catch (e) {
      alert(e instanceof Error ? e.message : "Error al marcar como revisado");
    } finally {
      setMarcando(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-pink-200">Ingresos</h1>
          <p className="text-gray-500 dark:text-pink-300/60 text-sm mt-1">
            {filtrados.length} factura{filtrados.length !== 1 && "s"} · {formatMoney(totalPeriodo)}
          </p>
        </div>
        <div className="inline-flex bg-white dark:bg-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-800 self-start">
          {(["todos", "no_revisado", "revisado"] as Filtro[]).map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filtro === f ? "bg-pink-500 text-white" : "text-gray-500 dark:text-pink-300/70"
              }`}
            >
              {f === "todos" ? "Todos" : f === "no_revisado" ? "No revisados" : "Revisados"}
            </button>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <p className="text-center text-gray-400 dark:text-pink-300/50 py-12">Cargando...</p>
        ) : filtrados.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-pink-300/50 py-12">
            No hay facturas de ingreso todavía.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800 text-left text-gray-400 dark:text-pink-300/50">
                  <th className="px-5 py-3 font-medium"># </th>
                  <th className="px-5 py-3 font-medium">Fecha</th>
                  <th className="px-5 py-3 font-medium">Cliente</th>
                  <th className="px-5 py-3 font-medium">Evento</th>
                  <th className="px-5 py-3 font-medium text-right">Total</th>
                  <th className="px-5 py-3 font-medium">Confianza</th>
                  <th className="px-5 py-3 font-medium">Estado</th>
                  <th className="px-5 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filtrados.map((i) => (
                  <tr
                    key={i.id}
                    className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-gray-400">{i.numero_factura_interno}</td>
                    <td className="px-5 py-3 text-gray-600 dark:text-pink-200/80">{formatDate(i.fecha_factura)}</td>
                    <td className="px-5 py-3 text-gray-800 dark:text-pink-100 font-medium">
                      {i.cliente || "—"}
                    </td>
                    <td className="px-5 py-3 text-gray-600 dark:text-pink-200/80 truncate max-w-[200px]">
                      {i.evento || "—"}
                    </td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900 dark:text-pink-100">
                      {formatMoney(Number(i.total), i.moneda)}
                    </td>
                    <td className="px-5 py-3">
                      <ConfianzaBadge confianza={i.confianza} />
                    </td>
                    <td className="px-5 py-3">
                      <EstadoBadge estado={i.estado_revision} />
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <a
                          href={i.link_imagen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-gray-400 hover:text-pink-500 transition-colors"
                          title="Ver factura original"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <button
                          onClick={() => setEditando(i)}
                          className="p-1.5 text-gray-400 hover:text-pink-500 transition-colors"
                          title="Corregir datos"
                        >
                          <Pencil size={16} />
                        </button>
                        {i.estado_revision !== "revisado" && (
                          <button
                            onClick={() => handleMarcar(i.id)}
                            disabled={marcando === i.id}
                            className="p-1.5 text-gray-400 hover:text-emerald-500 transition-colors disabled:opacity-50"
                            title="Marcar como revisado"
                          >
                            {marcando === i.id ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <Check size={16} />
                            )}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {editando && (
        <EditInvoiceModal tabla="ingresos" invoice={editando} onClose={() => setEditando(null)} />
      )}
    </div>
  );
}
