# TeamRoster

A squad-management app for a cricket team, built with React, Vite, Tailwind CSS and shadcn/ui. Browse the squad, open a player's profile, and add or remove players.

**Live demo:** https://teamroster.vercel.app/

Author: Mahee ([@maheecse](https://github.com/maheecse))

## Features

- Player cards showing name, role, jersey number and age
- Search by name and filter by role (Batter, Bowler, All-rounder, Wicketkeeper)
- Player profile page with matches, runs, wickets and strike rate
- Add a new player with a form, and remove a player from their profile
- The squad is saved in the browser, so it stays after a refresh

## Tech stack

- React (with Vite)
- Tailwind CSS
- shadcn/ui: Button, Card, Input, Label, Badge
- React Router

## React hooks used

| Hook          | Where                                            | What it does                                               |
| ------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| `useState`    | `App.jsx`                                        | Holds the players list                                     |
| `useState`    | `Home.jsx`                                       | Holds the search text and the selected role                |
| `useState`    | `AddPlayer.jsx`                                  | Holds the form values and the error message                |
| `useEffect`   | `App.jsx`                                        | Saves the players list to localStorage whenever it changes |
| `useEffect`   | `Home.jsx`, `PlayerProfile.jsx`, `AddPlayer.jsx` | Sets the browser tab title when a page opens               |
| `useNavigate` | `PlayerCard.jsx`                                 | Opens a player's profile from the card                     |
| `useNavigate` | `PlayerProfile.jsx`                              | Back button, and returns home after removing a player      |
| `useNavigate` | `AddPlayer.jsx`                                  | Returns home after saving a new player                     |

## Project structure

```
src/
  main.jsx              app entry, wraps the app in BrowserRouter
  App.jsx               routes and the players state
  data/players.js       starting squad
  components/
    PlayerCard.jsx      one player card
    ui/                 shadcn/ui components
  pages/
    Home.jsx            squad list, search and filter
    PlayerProfile.jsx   one player's details
    AddPlayer.jsx       form to add a player
```

## Run locally

```bash
git clone https://github.com/maheecse/teamroster.git
cd teamroster
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
```

## Notes

- Players are stored in each visitor's own browser (localStorage), so there is no shared database.
- The player names and stats are made up for this project.
