import { useEffect, useState } from "react"
import { Navigate, Route, Routes, Link, useNavigate, useParams } from "react-router-dom"
import { Plus, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"

const samplePlayers = [
  { id: 1, name: "Shakib Al Hasan", role: "All Rounder", age: 37, stats: "Runs: 7570 | Wickets: 316" },
  { id: 2, name: "Jamal Bhuyan", role: "Midfielder", age: 34, stats: "Matches: 78 | Goals: 6" },
  { id: 3, name: "Litton Das", role: "Wicket Keeper", age: 30, stats: "Runs: 2741 | Catches: 42" },
]

function App() {
  const [players, setPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("players")
    return savedPlayers ? JSON.parse(savedPlayers) : samplePlayers
  })

  // Save players every time the player list changes.
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players))
  }, [players])

  return <Routes>
    <Route path="/" element={<Dashboard players={players} setPlayers={setPlayers} />} />
    <Route path="/player/:id" element={<PlayerDetails players={players} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}

function Dashboard({ players, setPlayers }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [age, setAge] = useState("")
  const [stats, setStats] = useState("")

  function addPlayer(event) {
    event.preventDefault()

    const newPlayer = {
      id: Date.now(),
      name,
      role,
      age,
      stats,
    }

    setPlayers((previousPlayers) => [...previousPlayers, newPlayer])
    setName("")
    setRole("")
    setAge("")
    setStats("")
    setOpen(false)
  }

  return <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#d1fae5,_transparent_34%),linear-gradient(135deg,_#f8fafc,_#ecfdf5)] p-5 md:p-8">
    <div className="mx-auto max-w-6xl">
      <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-emerald-700"><Users size={25} /><span className="font-bold tracking-[0.18em]">TEAMROSTER</span></div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Our Sports Squad</h1>
          <p className="mt-1 text-slate-500">Manage cricket or football players in one place.</p>
        </div>
        <Button onClick={() => setOpen(true)}><Plus size={17} /> Add Player</Button>
      </header>

      <Card className="mb-6 overflow-hidden border-0 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
        <CardContent className="flex items-center justify-between p-6">
          <div><p className="text-sm text-slate-300">TOTAL PLAYERS</p><p className="mt-1 text-4xl font-bold">{players.length}</p></div>
          <Users size={42} className="text-emerald-300" />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => <Card key={player.id} className="cursor-pointer transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg" onClick={() => navigate(`/player/${player.id}`)}>
          <CardHeader><Badge>{player.role}</Badge><CardTitle className="mt-4">{player.name}</CardTitle></CardHeader>
          <CardContent className="space-y-1 text-sm text-slate-600"><p><b>Age:</b> {player.age}</p><p><b>Stats:</b> {player.stats}</p></CardContent>
          <CardFooter className="text-sm font-semibold text-emerald-700">View Player Profile →</CardFooter>
        </Card>)}
      </div>
    </div>

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogClose onClick={() => setOpen(false)} />
        <DialogTitle>Add New Player</DialogTitle>
        <form className="mt-5 space-y-3" onSubmit={addPlayer}>
          <Input placeholder="Player Name" value={name} onChange={(event) => setName(event.target.value)} required />
          <Input placeholder="Role (Batsman / Midfielder)" value={role} onChange={(event) => setRole(event.target.value)} required />
          <Input type="number" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)} required />
          <Input placeholder="Stats (Runs / Goals / Wickets)" value={stats} onChange={(event) => setStats(event.target.value)} required />
          <Button className="w-full" type="submit">Save Player</Button>
        </form>
      </DialogContent>
    </Dialog>
  </main>
}

function PlayerDetails({ players }) {
  const { id } = useParams()
  const player = players.find((item) => item.id === parseInt(id))

  if (!player) return <Navigate to="/" replace />

  return <main className="grid min-h-screen place-items-center bg-[linear-gradient(135deg,_#f8fafc,_#ecfdf5)] p-5">
    <Card className="w-full max-w-lg">
      <CardHeader><Badge>{player.role}</Badge><CardTitle className="mt-4 text-2xl">{player.name}</CardTitle></CardHeader>
      <CardContent className="space-y-3 text-slate-700"><p><b>Role:</b> {player.role}</p><p><b>Age:</b> {player.age}</p><p><b>Statistics:</b> {player.stats}</p></CardContent>
      <CardFooter><Link to="/"><Button variant="outline">Back to Team</Button></Link></CardFooter>
    </Card>
  </main>
}

export default App
