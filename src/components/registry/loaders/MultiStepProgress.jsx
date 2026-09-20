import { Check, CreditCard, PackageCheck, UserRound, WandSparkles } from "lucide-react";

const steps=[
  {label:"Profile",icon:UserRound,done:true},
  {label:"Plan",icon:WandSparkles,done:true},
  {label:"Payment",icon:CreditCard,active:true},
  {label:"Finish",icon:PackageCheck},
];

export default function MultiStepProgress(){
  return <section className="w-full max-w-3xl rounded-[28px] border border-white/10 bg-[#07101c] p-5 shadow-2xl shadow-black/35 sm:p-6">
    <div className="grid grid-cols-4 gap-2">{steps.map((step,index)=>{const Icon=step.icon; const complete=step.done||step.active; return <div key={step.label} className="relative">{index<steps.length-1&&<div className="absolute left-[58%] right-[-42%] top-5 h-px bg-white/10"><div className={"h-full "+(step.done?"w-full bg-cyan-300":"w-0")}/></div>}<div className="relative z-10 flex flex-col items-center text-center"><div className={"flex h-10 w-10 items-center justify-center rounded-full border "+(step.done?"border-cyan-300 bg-cyan-300 text-slate-950":step.active?"border-cyan-300/40 bg-cyan-300/10 text-cyan-300":"border-white/10 bg-[#0a1422] text-slate-700")}>{step.done?<Check className="h-4 w-4"/>:<Icon className="h-4 w-4"/>}</div><p className={"mt-2 text-[11px] font-medium "+(complete?"text-slate-300":"text-slate-700")}>{step.label}</p></div></div>})}</div>
  </section>
}
