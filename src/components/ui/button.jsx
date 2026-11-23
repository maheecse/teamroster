import { cn } from "@/lib/utils"

function Button({ className, variant = "default", ...props }) {
  const styles = {
    default: "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600",
    outline: "border border-emerald-100 bg-white text-emerald-800 hover:bg-emerald-50",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  }
  return <button className={cn("rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300", styles[variant], className)} {...props} />
}

export { Button }
