"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Carga una tabla y se mantiene sincronizada en vivo via Supabase Realtime.
 * order: columna por la que ordenar (descendente).
 */
export function useRealtimeTable<T extends { id: string }>(
  table: string,
  order: string = "fecha_registro"
) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    let active = true;

    async function load() {
      const { data } = await supabase
        .from(table)
        .select("*")
        .order(order, { ascending: false });
      if (active && data) setRows(data as T[]);
      setLoading(false);
    }
    load();

    // Realtime necesita el token de sesion del usuario para que la politica
    // RLS ("solo autenticados") permita entregar los eventos - sin esto la
    // suscripcion "funciona" pero nunca llega ningun evento.
    async function setupChannel() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      // Si el efecto ya se limpio mientras esperabamos la sesion (React
      // StrictMode en desarrollo ejecuta el efecto dos veces), no crear
      // el canal - evita suscribirse dos veces al mismo nombre de canal.
      if (!active) return null;
      if (session) {
        supabase.realtime.setAuth(session.access_token);
      }

      const channel = supabase
        .channel(`${table}-live`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table },
          (payload) => {
            setRows((current) => {
              if (payload.eventType === "INSERT") {
                return [payload.new as T, ...current];
              }
              if (payload.eventType === "UPDATE") {
                return current.map((r) =>
                  r.id === (payload.new as T).id ? (payload.new as T) : r
                );
              }
              if (payload.eventType === "DELETE") {
                return current.filter((r) => r.id !== (payload.old as T).id);
              }
              return current;
            });
          }
        )
        .subscribe();

      return channel;
    }

    const channelPromise = setupChannel();

    return () => {
      active = false;
      channelPromise.then((channel) => {
        if (channel) supabase.removeChannel(channel);
      });
    };
  }, [table, order]);

  return { rows, loading };
}
