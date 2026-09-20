import { ArrowUpRight, Layers3, Sparkles, WandSparkles, Workflow } from "lucide-react";

const features = [
  {
    title: "Smart Automations",
    description: "Trigger multi-step workflows from product events.",
    status: "In Development",
    progress: 72,
    icon: Workflow,
  },
  {
    title: "Team Spaces",
    description: "Shared workspaces with granular collaborator roles.",
    status: "Planned",
    progress: 34,
    icon: Layers3,
  },
  {
    title: "AI Theme Studio",
    description: "Generate theme tokens while preserving your design system.",
    status: "Research",
    progress: 18,
    icon: WandSparkles,
  },
];

const statusClasses = {
  "In Development": "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  "Planned": "border-violet-300/20 bg-violet-300/10 text-violet-200",
  "Research": "border-amber-300/20 bg-amber-300/10 text-amber-200",
};

export default function UpcomingFeaturesCard() {
  return (
    <section className="group relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-1 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl">
      <div className="absolute -left-20 top-8 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />
      <div className="absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl transition duration-700 group-hover:bg-violet-500/20" />

      <div className="relative rounded-[26px] border border-white/10 bg-slate-950/55 p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Product roadmap
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">Upcoming Features</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
              A focused look at what is shipping next across the platform.
            </p>
          </div>

          <button type="button" className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white">
            Full roadmap
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-7 space-y-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="group/item rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055]">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.035] text-slate-200">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="font-medium text-slate-100">{feature.title}</h4>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{feature.description}</p>
                      </div>
                      <span className={"w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] " + statusClasses[feature.status]}>
                        {feature.status}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400" style={{ width: String(feature.progress) + "%" }} />
                      </div>
                      <span className="w-8 text-right font-mono text-[10px] text-slate-600">{feature.progress}%</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
