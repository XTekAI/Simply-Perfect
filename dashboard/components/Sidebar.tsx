"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Receipt, TrendingUp, Users, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/", label: "Resumen", icon: LayoutDashboard },
  { href: "/gastos", label: "Gastos", icon: Receipt },
  { href: "/ingresos", label: "Ingresos", icon: TrendingUp },
  { href: "/leads", label: "Leads", icon: Users },
];

export function Sidebar({ userEmail }: { userEmail: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  const content = (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-pink-200">
          Simply Perfect
        </h1>
        <p className="text-xs text-gray-400 dark:text-pink-300/60 tracking-widest uppercase mt-1">
          Panel de facturación
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-300"
                  : "text-gray-600 hover:bg-gray-50 dark:text-pink-200/70 dark:hover:bg-gray-900"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between px-2 mb-3">
          <p className="text-xs text-gray-500 dark:text-pink-300/60 truncate">{userEmail}</p>
          <ThemeToggle />
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 dark:text-pink-300/70 dark:hover:bg-gray-900 transition-colors"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <span className="font-serif font-bold text-lg text-gray-900 dark:text-pink-200">
          Simply Perfect
        </span>
        <button onClick={() => setOpen(!open)} className="p-2 text-gray-600 dark:text-pink-300">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950">{content}</div>
      )}

      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800">
        {content}
      </aside>
    </>
  );
}
