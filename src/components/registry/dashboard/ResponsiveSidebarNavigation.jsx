import { useState } from "react";
import { BarChart3, ChevronLeft, ChevronRight, CreditCard, LayoutDashboard, Menu, Search, Settings, Users, X, Zap } from "lucide-react";

const items = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Customers", icon: Users },
  { label: "Billing", icon: CreditCard },
];

function Sidebar({ collapsed, setCollapsed, active, setActive, mobile, close }) {
  return (
    <div className="flex h-full flex-col">
      <div className={(collapsed ? "justify-center " : "justify-between ") + "flex h-[68px] items-center border-b border-white/10 px-3"}>
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
            <Zap className="h-[18px] w-[18px]" fill="currentColor" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold text-white">Core Console</p>
              <p className="text-[10px] text-slate-600">Team workspace</p>
            </div>
          )}
        </div>
        {mobile && (
          <button type="button" onClick={close} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-400">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex-1 p-3">
        {!collapsed && (
          <label className="mb-3 flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 text-slate-600">
            <Search className="h-4 w-4" />
            <input placeholder="Search" className="min-w-0 flex-1 bg-transparent text-xs text-slate-300 outline-none" />
          </label>
        )}

        <nav className="space-y-1.5">
          {items.map((item) => {
            const Icon = item.icon;
            const selected = item.label === active;
            return (
              <button
                type="button"
                key={item.label}
                onClick={() => { setActive(item.label); if (mobile) close(); }}
                className={(collapsed ? "justify-center " : "gap-3 px-3 ") + (selected ? "border-cyan-300/15 bg-cyan-300/10 text-cyan-100 " : "border-transparent text-slate-500 hover:bg-white/[0.04] hover:text-slate-200 ") + "flex h-11 w-full items-center rounded-xl border text-sm font-medium transition"}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="my-3 border-t border-white/10" />

        <button type="button" className={(collapsed ? "justify-center " : "gap-3 px-3 ") + "flex h-10 w-full items-center rounded-xl text-xs font-medium text-slate-600 transition hover:bg-white/[0.04] hover:text-slate-300"}>
          <Settings className="h-4 w-4" />
          {!collapsed && <span>Settings</span>}
        </button>
      </div>

      {!mobile && (
        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className={(collapsed ? "justify-center " : "justify-between px-3 ") + "flex h-9 w-full items-center rounded-xl border border-white/10 bg-white/[0.025] text-[11px] font-medium text-slate-500"}
          >
            {!collapsed && <span>Collapse</span>}
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}

export default function ResponsiveSidebarNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Overview");

  return (
    <section className="relative min-h-[520px] w-full max-w-4xl overflow-hidden rounded-[26px] border border-white/10 bg-[#07101d] shadow-2xl shadow-black/30">
      <div className="flex min-h-[520px]">
        <aside className={(collapsed ? "w-[76px] " : "w-[230px] ") + "hidden shrink-0 border-r border-white/10 bg-[#050b15] transition-[width] duration-300 md:block"}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} active={active} setActive={setActive} />
        </aside>

        {mobileOpen && (
          <>
            <button type="button" onClick={() => setMobileOpen(false)} className="absolute inset-0 z-20 bg-black/55 backdrop-blur-[2px] md:hidden" aria-label="Close navigation overlay" />
            <aside className="absolute inset-y-0 left-0 z-30 w-[240px] border-r border-white/10 bg-[#050b15] shadow-2xl md:hidden">
              <Sidebar collapsed={false} setCollapsed={setCollapsed} active={active} setActive={setActive} mobile close={() => setMobileOpen(false)} />
            </aside>
          </>
        )}

        <main className="min-w-0 flex-1">
          <header className="flex h-[68px] items-center gap-3 border-b border-white/10 px-4 sm:px-5">
            <button type="button" onClick={() => setMobileOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 md:hidden">
              <Menu className="h-4 w-4" />
            </button>
            <div>
              <p className="text-sm font-semibold text-slate-200">{active}</p>
              <p className="mt-0.5 text-[10px] text-slate-700">Workspace / {active}</p>
            </div>
          </header>

          <div className="p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Revenue", "$84.2k", 78],
                ["Customers", "12,490", 62],
                ["Conversion", "8.7%", 48],
              ].map((metric) => (
                <div key={metric[0]} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-[11px] text-slate-600">{metric[0]}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-200">{metric[1]}</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: String(metric[2]) + "%" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 min-h-[270px] rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs font-medium text-slate-400">Performance surface</p>
              <p className="mt-1 text-[10px] text-slate-700">Your page content lives beside the navigation.</p>
              <div className="mt-7 flex h-[170px] items-end gap-2 rounded-xl border border-white/5 bg-black/10 p-4">
                {[42,58,44,76,62,88,72,92,68,84,78,96].map((height, index) => (
                  <div key={String(height) + index} className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-400/20 to-violet-400/50" style={{ height: String(height) + "%" }} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
