import { cn } from "@/lib/utils"

function Card({ className, ...props }) { return <div className={cn("rounded-2xl border border-emerald-100/80 bg-white shadow-[0_10px_30px_rgba(15,70,55,0.08)]", className)} {...props} /> }
function CardHeader({ className, ...props }) { return <div className={cn("p-5 pb-0", className)} {...props} /> }
function CardTitle({ className, ...props }) { return <h2 className={cn("text-lg font-bold text-slate-800", className)} {...props} /> }
function CardContent({ className, ...props }) { return <div className={cn("p-5", className)} {...props} /> }
function CardFooter({ className, ...props }) { return <div className={cn("border-t border-emerald-50 p-4", className)} {...props} /> }

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
