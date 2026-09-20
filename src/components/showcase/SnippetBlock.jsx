import { useEffect, useRef, useState } from "react";
import { Check, Code2, Copy, Eye } from "lucide-react";

function legacyCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

export default function SnippetBlock({
  title,
  description,
  filename,
  code,
  tags = [],
  children,
}) {
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState("preview");
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  async function copyCode() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        legacyCopy(code);
      }
    } catch {
      legacyCopy(code);
    }

    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1700);
  }

  const lines = code.replace(/\s+$/, "").split("\n");

  return (
    <article className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#060d18]/85 shadow-2xl shadow-black/25 backdrop-blur-xl">
      <header className="border-b border-white/[0.07] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">{title}</h2>
              <span className="rounded-md border border-emerald-300/10 bg-emerald-300/[0.06] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-300">Ready</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit rounded-xl border border-white/[0.08] bg-black/20 p-1">
            <button
              type="button"
              onClick={() => setView("preview")}
              className={[
                "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-semibold transition",
                view === "preview" ? "bg-white text-slate-950 shadow-lg" : "text-slate-500 hover:text-white",
              ].join(" ")}
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </button>
            <button
              type="button"
              onClick={() => setView("code")}
              className={[
                "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-semibold transition",
                view === "code" ? "bg-white text-slate-950 shadow-lg" : "text-slate-500 hover:text-white",
              ].join(" ")}
            >
              <Code2 className="h-3.5 w-3.5" />
              Code
            </button>
          </div>

          <button
            type="button"
            onClick={copyCode}
            className={[
              "inline-flex h-9 items-center justify-center gap-2 rounded-xl border px-3.5 text-[11px] font-semibold transition",
              copied
                ? "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-300"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:text-white",
            ].join(" ")}
            aria-live="polite"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
      </header>

      {view === "preview" ? (
        <div className="preview-grid relative min-h-[390px] overflow-hidden bg-[#050b14] p-4 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(34,211,238,.09),transparent_32%),radial-gradient(circle_at_84%_88%,rgba(139,92,246,.09),transparent_34%)]" />
          <div className="relative flex min-h-[330px] items-center justify-center">{children}</div>
        </div>
      ) : (
        <div className="bg-[#02060d]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/60" />
            </div>
            <p className="max-w-[70%] truncate font-mono text-[10px] text-slate-700">{filename}</p>
          </div>
          <pre className="code-scrollbar max-h-[620px] overflow-auto py-4 text-[12px] leading-6 sm:text-[13px]">
            <code>
              {lines.map((line, index) => (
                <span key={String(index) + line} className="grid min-w-max grid-cols-[3.5rem_1fr] px-4 sm:px-5">
                  <span aria-hidden="true" className="select-none pr-4 text-right font-mono text-slate-800">{index + 1}</span>
                  <span className="pr-6 font-mono text-slate-300">{line || " "}</span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      )}
    </article>
  );
}
