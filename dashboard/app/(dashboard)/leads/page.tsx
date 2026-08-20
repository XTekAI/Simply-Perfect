"use client";

import { useMemo, useState } from "react";
import { Check, Loader2, Calendar, Users as UsersIcon, MapPin, Mail, Phone } from "lucide-react";
import { useRealtimeTable } from "@/lib/hooks/useRealtimeTable";
import { Lead } from "@/lib/types";
import { formatDate, formatDateTime } from "@/lib/format";
import { Card, EstadoBadge } from "@/components/ui";
import { marcarRevisado } from "@/lib/n8n";

type Filtro = "todos" | "no_revisado" | "revisado";

export default function LeadsPage() {
  const { rows, loading } = useRealtimeTable<Lead>("sp_leads");
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [marcando, setMarcando] = useState<string | null>(null);

  const filtrados = useMemo(() => {
    if (filtro === "todos") return rows;
    return rows.filter((r) => r.estado === filtro);
  }, [rows, filtro]);

  async function handleMarcar(id: string) {
    setMarcando(id);
    try {
      await marcarRevisado("leads", id);
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
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-pink-200">Leads</h1>
          <p className="text-gray-500 dark:text-pink-300/60 text-sm mt-1">
            {filtrados.length} contacto{filtrados.length !== 1 && "s"} del formulario del sitio
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

      {loading ? (
        <p className="text-center text-gray-400 dark:text-pink-300/50 py-12">Cargando...</p>
      ) : filtrados.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-400 dark:text-pink-300/50">Todavía no hay leads.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtrados.map((lead) => (
            <Card key={lead.id} className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-pink-200">
                    {lead.nombre || "Sin nombre"}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-pink-300/50">
                    {formatDateTime(lead.fecha_registro)}
                  </p>
                </div>
                <EstadoBadge estado={lead.estado} />
              </div>

              {lead.tipo_evento && (
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 mb-3">
                  {lead.tipo_evento}
                </span>
              )}

              <div className="space-y-1.5 text-sm text-gray-600 dark:text-pink-200/80 mb-3">
                {lead.email && (
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" /> {lead.email}
                  </p>
                )}
                {lead.telefono && (
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-gray-400" /> {lead.telefono}
                  </p>
                )}
                {lead.fecha_evento && (
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-400" /> {formatDate(lead.fecha_evento)}
                  </p>
                )}
                {lead.numero_invitados && (
                  <p className="flex items-center gap-2">
                    <UsersIcon size={14} className="text-gray-400" /> {lead.numero_invitados} invitados
                  </p>
                )}
                {lead.lugar_evento && (
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-gray-400" /> {lead.lugar_evento}
                  </p>
                )}
              </div>

              {lead.mensaje && (
                <p className="text-sm text-gray-500 dark:text-pink-300/70 italic border-t border-gray-100 dark:border-gray-800 pt-3">
                  &quot;{lead.mensaje}&quot;
                </p>
              )}

              {lead.estado !== "revisado" && (
                <button
                  onClick={() => handleMarcar(lead.id)}
                  disabled={marcando === lead.id}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 disabled:opacity-50"
                >
                  {marcando === lead.id ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Check size={16} />
                  )}
                  Marcar como revisado
                </button>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
