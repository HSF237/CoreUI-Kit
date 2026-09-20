import { useMemo, useState } from "react";
import { Blocks, Github, LayoutDashboard, Landmark, Search, Sparkles } from "lucide-react";
import SnippetBlock from "./SnippetBlock.jsx";
import { categories, registryItems } from "../../registry/index.js";

const categoryIcons = {
  fintech: Landmark,
  dashboard: LayoutDashboard,
  interactive: Sparkles,
};

export default function RegistryShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const search = query.trim().toLowerCase();
    return registryItems.filter((item) => {
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      const text = [item.title, item.description, item.category, ...item.tags].join(" ").toLowerCase();
      return categoryMatch && (!search || text.includes(search));
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen text-slate-200">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-cyan-200">
              <Blocks className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-white">CoreUI-Kit</p>
              <p className="text-[10px] text-slate-600">Copy-and-paste React registry</p>
            </div>
          </div>

          <a href="https://github.com/HSF237/CoreUI-Kit" target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-[11px] font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white">
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1520px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] px-5 py-9 sm:px-8 lg:px-10">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Open-source UI building blocks
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Production-ready interfaces.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                Copy the source, own the code.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              CoreUI-Kit is a modular registry of polished React + Tailwind CSS blocks. Preview each component live, inspect the source, and copy it directly into your app.
            </p>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-[86px] lg:self-start">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-3">
              <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">Browse registry</p>

              <nav className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1.5 lg:overflow-visible">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={(activeCategory === "all" ? "border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-100 " : "border-transparent text-slate-500 hover:bg-white/[0.04] hover:text-slate-300 ") + "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition lg:w-full"}
                >
                  <Blocks className="h-4 w-4" />
                  <span className="flex-1">All Blocks</span>
                  <span className="text-[10px] text-slate-700">{registryItems.length}</span>
                </button>

                {categories.map((category) => {
                  const Icon = categoryIcons[category.id];
                  const count = registryItems.filter((item) => item.category === category.id).length;
                  return (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={(activeCategory === category.id ? "border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-100 " : "border-transparent text-slate-500 hover:bg-white/[0.04] hover:text-slate-300 ") + "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition lg:w-full"}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{category.label}</span>
                      <span className="text-[10px] text-slate-700">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {activeCategory === "all" ? "All registry blocks" : categories.find((category) => category.id === activeCategory)?.label}
                </h2>
                <p className="mt-1 text-xs text-slate-600">{visibleItems.length} component{visibleItems.length === 1 ? "" : "s"} ready to inspect.</p>
              </div>

              <label className="flex h-10 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 text-slate-600 focus-within:border-cyan-300/20 sm:w-[260px]">
                <Search className="h-4 w-4" />
                <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search components" className="min-w-0 flex-1 bg-transparent text-xs text-slate-300 outline-none placeholder:text-slate-700" />
              </label>
            </div>

            <div className="space-y-7">
              {visibleItems.map((item) => {
                const Component = item.component;
                return (
                  <SnippetBlock
                    key={item.slug}
                    title={item.title}
                    description={item.description}
                    filename={item.path}
                    code={item.source}
                    tags={item.tags}
                  >
                    <Component />
                  </SnippetBlock>
                );
              })}

              {visibleItems.length === 0 && (
                <div className="rounded-[26px] border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
                  <p className="text-sm font-medium text-slate-300">No blocks match that search.</p>
                  <p className="mt-2 text-xs text-slate-600">Try a broader phrase or switch categories.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
