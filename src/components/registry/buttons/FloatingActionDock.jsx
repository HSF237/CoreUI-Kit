import { Bell, Home, Plus, Search, Settings, User } from "lucide-react";

export default function FloatingActionDock(){
  return <section className="flex w-full max-w-2xl items-center justify-center rounded-[28px] border border-white/10 bg-[#07101c] px-5 py-16 shadow-2xl shadow-black/35">
    <nav className="flex items-center gap-1 rounded-[22px] border border-white/10 bg-black/35 p-2 shadow-2xl backdrop-blur-xl">
      {[Home,Search,Bell].map((Icon,index)=><button key={index} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-white/[0.05] hover:text-white"><Icon className="h-4 w-4"/></button>)}
      <button className="mx-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-300 text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1"><Plus className="h-5 w-5"/></button>
      {[User,Settings].map((Icon,index)=><button key={index} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-white/[0.05] hover:text-white"><Icon className="h-4 w-4"/></button>)}
    </nav>
  </section>
}
