import { useEffect, useRef, useState } from "react";

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
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  async function copyCode() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
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
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/75 shadow-2xl shadow-black/30 backdrop-blur">
      <header className="border-b border-white/10 px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="preview-grid relative min-h-[360px] overflow-hidden bg-[#07101f] p-4 sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,.12),transparent_34%),radial-gradient(circle_at_80%_88%,rgba(139,92,246,.12),transparent_34%)]" />
        <div className="relative flex min-h-[310px] items-center justify-center">{children}</div>
      </div>

      <div className="border-t border-white/10 bg-[#030712]">
        <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="truncate font-mono text-xs text-slate-400">{filename}</p>
          <button
            type="button"
            onClick={copyCode}
            className={copied
              ? "inline-flex min-h-9 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3.5 text-xs font-semibold text-emerald-300"
              : "inline-flex min-h-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-3.5 text-xs font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
            }
            aria-live="polite"
          >
            {copied ? "✓ Copied!" : "📋 Copy Code"}
          </button>
        </div>

        <pre className="code-scrollbar max-h-[520px] overflow-auto py-4 text-[12px] leading-6 sm:text-[13px]">
          <code>
            {lines.map((line, index) => (
              <span key={String(index) + line} className="grid min-w-max grid-cols-[3.5rem_1fr] px-4 sm:px-5">
                <span aria-hidden="true" className="select-none pr-4 text-right text-slate-700">{index + 1}</span>
                <span className="pr-6 font-mono text-slate-300">{line || " "}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </article>
  );
}
