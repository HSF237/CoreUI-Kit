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

const categoryStyles = {
  fintech: "border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-200",
  dashboard: "border-blue-300/15 bg-blue-300/[0.07] text-blue-200",
  interactive: "border-amber-300/15 bg-amber-300/[0.07] text-amber-200",
  buttons: "border-rose-300/15 bg-rose-300/[0.07] text-rose-200",
  loaders: "border-lime-300/15 bg-lime-300/[0.07] text-lime-200",
  forms: "border-sky-300/15 bg-sky-300/[0.07] text-sky-200",
};

const categoryDotStyles = {
  fintech: "bg-emerald-400",
  dashboard: "bg-blue-400",
  interactive: "bg-amber-400",
  buttons: "bg-rose-400",
  loaders: "bg-lime-400",
  forms: "bg-sky-400",
};

export default function RegistryShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const visibleItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return registryItems.filter((item) => {
      const categoryMatches =
        activeCategory === "all" || item.category === activeCategory;

      const searchable = [item.title, item.description, ...item.tags]
        .join(" ")
        .toLowerCase();

      return categoryMatches && (!normalized || searchable.includes(normalized));
    });
  }, [activeCategory, query]);

  const activeLabel =
    activeCategory === "all"
      ? "All Components"
      : categories.find((category) => category.id === activeCategory)?.label;

  return (
    <div className="min-h-screen text-zinc-200">
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 grid-cols-2 gap-1 rounded-[13px] border border-white/[0.08] bg-[#111114] p-2">
              <span className="rounded-[4px] bg-emerald-400" />
              <span className="rounded-[4px] bg-blue-400" />
              <span className="rounded-[4px] bg-amber-400" />
              <span className="rounded-[4px] bg-rose-400" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-bold tracking-[-0.02em] text-white">
                  CoreUI-Kit
                </p>
                <span className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2 py-0.5 text-[9px] font-bold text-zinc-500">
                  v0.2
                </span>
              </div>
              <p className="truncate text-[10px] text-zinc-600">
                Copy-paste React component registry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-zinc-500 md:flex">
              <Code2 className="h-3.5 w-3.5 text-zinc-400" />
              {registryItems.length} polished blocks
            </div>

            <a
              href="https://github.com/HSF237/CoreUI-Kit"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 text-[11px] font-semibold text-zinc-300 transition hover:bg-white/[0.065] hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1560px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#0c0c0f] px-5 py-10 shadow-[0_30px_90px_rgba(0,0,0,.28)] sm:px-8 sm:py-12 lg:px-11">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative grid gap-10 xl:grid-cols-[1fr_430px] xl:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Open-source interface library
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
                Clean components.
                <span className="block text-zinc-400">
                  Distinct visual personalities.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Browse production-ready React blocks with intentional spacing,
                restrained effects, category-specific color systems, and source
                code you fully own.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold transition hover:-translate-y-0.5 " +
                      categoryStyles[category.id]
                    }
                  >
                    <span className={"h-1.5 w-1.5 rounded-full " + categoryDotStyles[category.id]} />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/[0.07] bg-[#101014] p-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-[18px] border border-white/[0.06] bg-[#0b0b0d] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {registryItems.length}
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">Components</p>
                </div>
                <div className="rounded-[18px] border border-white/[0.06] bg-[#0b0b0d] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {categories.length}
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">Categories</p>
                </div>
                <div className="rounded-[18px] border border-white/[0.06] bg-[#0b0b0d] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    MIT
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">Licensed</p>
                </div>
              </div>

              <div className="mt-2 rounded-[18px] border border-white/[0.06] bg-[#0b0b0d] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-zinc-400">
                    Color language
                  </p>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-700">
                    Category driven
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-6 gap-2">
                  {["bg-emerald-400","bg-blue-400","bg-amber-400","bg-rose-400","bg-lime-400","bg-sky-400"].map((color) => (
                    <span key={color} className={"h-8 rounded-xl " + color} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-7 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-[82px] lg:self-start">
            <div className="rounded-[22px] border border-white/[0.07] bg-[#0c0c0f] p-2.5">
              <div className="px-3 pb-2 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                  Registry
                </p>
              </div>

              <nav className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className={[
                    "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-xs font-medium transition lg:w-full",
                    activeCategory === "all"
                      ? "border-white/[0.1] bg-white/[0.055] text-white"
                      : "border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300",
                  ].join(" ")}
                >
                  <Blocks className="h-4 w-4" />
                  <span className="flex-1 text-left">All Components</span>
                  <span className="text-[10px] text-zinc-700">
                    {registryItems.length}
                  </span>
                </button>

                {categories.map((category) => {
                  const Icon = categoryIcons[category.id];
                  const count = registryItems.filter(
                    (item) => item.category === category.id,
                  ).length;

                  return (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={[
                        "flex min-w-fit items-center gap-3 rounded-xl border px-3 py-2.5 text-xs font-medium transition lg:w-full",
                        activeCategory === category.id
                          ? categoryStyles[category.id]
                          : "border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1 text-left">{category.label}</span>
                      <span className="text-[10px] opacity-60">{count}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-3 hidden rounded-[22px] border border-white/[0.07] bg-[#0c0c0f] p-4 lg:block">
              <p className="text-xs font-semibold text-zinc-300">Less visual noise.</p>
              <p className="mt-2 text-[11px] leading-5 text-zinc-600">
                Cleaner surfaces, quieter borders, stronger hierarchy, and color
                used only where it adds meaning.
              </p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="mb-5 flex flex-col gap-3 rounded-[18px] border border-white/[0.065] bg-[#0c0c0f] p-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="px-1">
                <h2 className="text-base font-semibold text-white">{activeLabel}</h2>
                <p className="mt-1 text-[11px] text-zinc-600">
                  {visibleItems.length} component{visibleItems.length === 1 ? "" : "s"} available
                </p>
              </div>

              <label className="flex h-10 w-full items-center gap-2 rounded-xl border border-white/[0.07] bg-[#09090b] px-3 text-zinc-600 focus-within:border-white/[0.15] sm:w-[290px]">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search components..."
                  className="min-w-0 flex-1 bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-700"
                />
                <kbd className="rounded-md border border-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-zinc-700">
                  /
                </kbd>
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
                    category={item.category}
                  >
                    <Component />
                  </SnippetBlock>
                );
              })}

              {visibleItems.length === 0 && (
                <div className="rounded-[26px] border border-dashed border-white/[0.08] bg-[#0c0c0f] px-6 py-20 text-center">
                  <Search className="mx-auto h-5 w-5 text-zinc-700" />
                  <p className="mt-4 text-sm font-medium text-zinc-300">
                    No components found.
                  </p>
                  <p className="mt-2 text-xs text-zinc-600">
                    Try another category or a broader search term.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="mx-auto max-w-[1560px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-t border-white/[0.06] py-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>CoreUI-Kit · Open source under the MIT License.</p>
          <p>{registryItems.length} blocks · React · Tailwind CSS · Vite</p>
        </div>
      </footer>
    </div>
  );
}
