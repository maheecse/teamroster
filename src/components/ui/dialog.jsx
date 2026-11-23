import { X } from "lucide-react"

function Dialog({ open, onOpenChange, children }) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onMouseDown={() => onOpenChange(false)}>{children}</div>
}

function DialogContent({ children }) {
  return <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" role="dialog" onMouseDown={(event) => event.stopPropagation()}>{children}</div>
}

function DialogTitle(props) { return <h2 className="text-xl font-bold text-slate-800" {...props} /> }
function DialogClose({ onClick }) { return <button type="button" className="absolute right-3 top-3 text-slate-500" onClick={onClick}><X size={20} /></button> }

export { Dialog, DialogContent, DialogTitle, DialogClose }
