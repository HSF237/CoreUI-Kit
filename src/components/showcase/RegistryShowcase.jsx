import { useMemo, useState } from "react";
import {
  Blocks,
  Code2,
  Github,
  LayoutDashboard,
  LoaderCircle,
  MousePointerClick,
  Search,
  Sparkles,
  TextCursorInput,
  WalletCards,
} from "lucide-react";
import SnippetBlock from "./SnippetBlock.jsx";
import { categories, registryItems } from "../../registry/index.js";

const categoryIcons = {
  fintech: WalletCards,
  dashboard: LayoutDashboard,
  interactive: Sparkles,
  buttons: MousePointerClick,
  loaders: LoaderCircle,
  forms: TextCursorInput,
};

export default function RegistryShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return registryItems.filter((item) => {
      const categoryMatches = activeCategory === "all" || item.category === activeCategory;
      const searchable = [item.title, item.description, ...item.tags].join(" ").toLowerCase();
      return categoryMatches && (!normalized || searchable.includes(normalized));
    });
  }, [activeCategory, query]);

  const activeLabel =
    activeCategory === "all"
      ? "All Components"
      : categories.find((category) => category.id === activeCategory)?.label;

  return (
    <div className="min-h-screen text-slate-200">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050816]/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-violet-400/15 shadow-lg shadow-cyan-950/20">
              <Blocks className="h-[18px] w-[18px] text-cyan-200" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-bold tracking-[-0.02em] text-white">CoreUI-Kit</p>
                <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.08] px-2 py-0.5 text-[9px] font-bold text-violet-200">v0.2</span>
              </div>
              <p className="truncate text-[10px] text-slate-600">Copy-paste React + Tailwind registry</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-500 md:flex">
              <Code2 className="h-3.5 w-3.5 text-cyan-300" />
              {registryItems.length} production-ready blocks
            </div>
            <a
              href="https://github.com/HSF237/CoreUI-Kit"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-[11px] font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1560px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <section className="relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#07101c]/80 px-5 py-9 shadow-2xl shadow-black/25 sm:px-8 sm:py-12 lg:px-11">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.12] blur-[90px]" />
          <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-violet-500/[0.12] blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-40 w-[40rem] -translate-x-1/2 bg-gradient-to-t from-cyan-300/[0.04] to-transparent blur-2xl" />

          <div className="relative grid gap-9 xl:grid-cols-[1fr_430px] xl:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Open-source interface library
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
                Beautiful UI without
                <span className="block bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                  rebuilding the boring parts.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Browse premium React blocks, preview every state, inspect the exact source,
                and copy the code directly into your product.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "MIT Licensed", "No hidden runtime"].map((label) => (
                  <span key={label} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-slate-500">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{registryItems.length}</p>
                <p className="mt-1 text-[10px] text-slate-600">UI blocks</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{categories.length}</p>
                <p className="mt-1 text-[10px] text-slate-600">Categories</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">100%</p>
                <p className="mt-1 text-[10px] text-slate-600">Copyable</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-7 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-[82px] lg:self-start">
            <div className="rounded-[24px] border border-white/[0.08] bg-[#07101c]/70 p-2.5 backdrop-blur-xl">
              <div className="px-3 pb-2 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">Registry</p>
              </div>

              <nav className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={[
                    "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-xs font-medium transition lg:w-full",
                    activeCategory === "all"
                      ? "border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-transparent text-slate-500 hover:bg-white/[0.035] hover:text-slate-300",
                  ].join(" ")}
                >
                  <Blocks className="h-4 w-4" />
                  <span className="flex-1 text-left">All Components</span>
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
                      className={[
                        "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-xs font-medium transition lg:w-full",
                        activeCategory === category.id
                          ? "border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-100"
                          : "border-transparent text-slate-500 hover:bg-white/[0.035] hover:text-slate-300",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1 text-left">{category.label}</span>
                      <span className="text-[10px] text-slate-700">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-3 hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-cyan-300/[0.05] to-violet-300/[0.04] p-4 lg:block">
              <p className="text-xs font-semibold text-slate-300">Own every line.</p>
              <p className="mt-2 text-[11px] leading-5 text-slate-600">
                Components are copied into your codebase. No vendor lock-in and no runtime registry dependency.
              </p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-5 flex flex-col gap-3 rounded-[20px] border border-white/[0.07] bg-white/[0.018] p-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="px-1">
                <h2 className="text-base font-semibold text-white">{activeLabel}</h2>
                <p className="mt-1 text-[11px] text-slate-600">
                  {visibleItems.length} component{visibleItems.length === 1 ? "" : "s"} available
                </p>
              </div>

              <label className="flex h-10 w-full items-center gap-2 rounded-xl border border-white/[0.08] bg-[#050a13] px-3 text-slate-600 focus-within:border-cyan-300/25 sm:w-[290px]">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search components..."
                  className="min-w-0 flex-1 bg-transparent text-xs text-slate-300 outline-none placeholder:text-slate-700"
                />
                <kbd className="rounded-md border border-white/[0.07] px-1.5 py-0.5 font-mono text-[9px] text-slate-700">/</kbd>
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
                <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.018] px-6 py-20 text-center">
                  <Search className="mx-auto h-5 w-5 text-slate-700" />
                  <p className="mt-4 text-sm font-medium text-slate-300">No components found.</p>
                  <p className="mt-2 text-xs text-slate-600">Try another category or a broader search term.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto max-w-[1560px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-6 text-[11px] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>CoreUI-Kit · Open source under the MIT License.</p>
          <p>{registryItems.length} blocks · React · Tailwind CSS · Vite</p>
        </div>
      </footer>
    </div>
  );
}
