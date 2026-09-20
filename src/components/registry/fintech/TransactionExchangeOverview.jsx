import { ArrowDownLeft, ArrowUpRight, RefreshCw, TrendingDown, TrendingUp, WalletCards } from "lucide-react";

const assets = [
  { symbol: "USD", name: "US Dollar", balance: "$12,480.32", change: 1.84 },
  { symbol: "EUR", name: "Euro", balance: "€6,430.18", change: 0.62 },
  { symbol: "GBP", name: "British Pound", balance: "£2,198.74", change: -0.37 },
];

export default function TransactionExchangeOverview() {
  return (
    <section className="w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]/95 p-5 shadow-2xl shadow-black/35 sm:p-6">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <WalletCards className="h-4 w-4" />
            Treasury overview
          </div>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">$21,109.24</p>
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
            <TrendingUp className="h-3.5 w-3.5" />
            +3.2% this month
          </div>
        </div>

        <button type="button" className="inline-flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.075] hover:text-white">
          <RefreshCw className="h-3.5 w-3.5" />
          Exchange
        </button>
      </div>

      <div className="grid gap-3 py-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
            <ArrowDownLeft className="h-4 w-4" />
          </div>
          <p className="mt-4 text-xs text-slate-500">Incoming</p>
          <p className="mt-1 text-lg font-semibold text-slate-100">+$4,820.00</p>
          <p className="mt-1 text-[11px] text-slate-600">18 settlements</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <p className="mt-4 text-xs text-slate-500">Outgoing</p>
          <p className="mt-1 text-lg font-semibold text-slate-100">-$2,145.80</p>
          <p className="mt-1 text-[11px] text-slate-600">11 transfers</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_.85fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          <div className="border-b border-white/10 px-4 py-3">
            <h3 className="text-sm font-semibold text-slate-200">Asset streams</h3>
            <p className="mt-0.5 text-[11px] text-slate-600">Balances and 24h movement</p>
          </div>

          <div className="divide-y divide-white/10">
            {assets.map((asset) => {
              const positive = asset.change >= 0;
              const TrendIcon = positive ? TrendingUp : TrendingDown;
              return (
                <div key={asset.symbol} className="grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3.5 transition hover:bg-white/[0.025]">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[11px] font-bold text-slate-200">
                      {asset.symbol}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200">{asset.name}</p>
                      <p className="mt-0.5 text-[11px] text-slate-600">Available balance</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-200">{asset.balance}</p>
                    <p className={(positive ? "text-emerald-300 " : "text-rose-300 ") + "mt-1 inline-flex items-center gap-1 text-[11px] font-medium"}>
                      <TrendIcon className="h-3 w-3" />
                      {positive ? "+" : ""}{asset.change.toFixed(2)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-400/[0.07] to-violet-400/[0.035] p-4">
          <p className="text-xs font-medium text-slate-400">Live exchange rate</p>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-slate-600">USD / EUR</p>
          <p className="mt-2 font-mono text-3xl font-semibold tracking-[-0.04em] text-white">0.9184</p>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <TrendingUp className="h-3 w-3" />
            +0.42% today
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/15 p-3 text-[11px]">
            <div className="flex justify-between"><span className="text-slate-600">Indicative spread</span><span className="font-mono text-slate-300">0.18%</span></div>
            <div className="mt-2 flex justify-between"><span className="text-slate-600">Updated</span><span className="text-slate-300">just now</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
