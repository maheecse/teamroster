import { cn } from "@/lib/utils"

function Input({ className, ...props }) {
  return <input className={cn("w-full rounded-xl border border-emerald-100 bg-emerald-50/30 px-3 py-2.5 text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100", className)} {...props} />
}

export { Input }
