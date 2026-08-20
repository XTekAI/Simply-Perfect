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

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [table, order]);

  return { rows, loading };
}
