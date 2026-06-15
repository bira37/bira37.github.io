# [Machina Agricola · Automa](https://bira37.github.io/machina-agricola-automa/)

A web-based solo **automa** companion for **Agricola** (Uwe Rosenberg / Lookout
Games), running **"Mac"** — the fan-made _Machina Agricola_ bot. Draw Mac's
action card, tap the action, and the app tells you exactly what to do on the
table and keeps the bookkeeping it can. Playable on any device directly in the
browser, no installation required.

## About

Agricola is a euro classic, and the _Machina Agricola_ bot turns it into a
genuinely good solo experience: **Mac plays as a real farmer**, with its own
board, its own priority cards, and a score tallied like a human player's.

The downside of running it by hand is the paperwork — priority cards, action
order, doubled capacities, harvests, breeding, scoring. This app handles that
flow so you can focus on your own farm instead of refereeing the bot.

Each turn you draw Mac's card and tap the first possible action, top to bottom.
The app logs it, explains **how Mac decides** and **what to do**, advances the
counters it can, and walks the round to its end — including the harvest.

## Features

- **Full Mac logic** across all 14 rounds — draw the priority card, tap the
  first possible action, and get clear _how to decide_ / _what to do_ notes for
  every action: taking resources, sowing, plowing, fences, stables, rooms,
  family growth, improvements, the Meeting Place, and more
- **Round flow on autopilot** — tracks Mac's plays (its family size at the start
  of the round) and offers to end the round once they're spent; **Wish for
  Children** adds a worker that only acts from the _next_ round
- **Harvest handling** — at rounds 4, 7, 9, 11, 13 and 14 the breeding prompt
  appears right next to the _end round_ button, and you can't advance until
  you've marked Mac's breeding
- **Auto-counting** — the app tallies occupations, improvements, family growth,
  plowed fields and the Meeting Place minor; you adjust the physical bits
  (resources, animals, crops) on the farm counters
- **Built-in accommodation reference** — Mac's housing rules at a glance
  (doubled capacities, types may be mixed, pets, people per room) so you always
  know how many animals Mac actually keeps
- **1–3 Macs** — run multiple bots, with turn-passing between them
- **Farmers of the Moor** toggle — adds horses and the related actions
- **Live scoring + detailed breakdown** — scored by the Agricola table plus
  Mac's rules, color-coded (green for positive, red for negative), with a
  per-Mac comparison at game end
- **Real card images** with tap-to-zoom
- **Undo** the last action in a single tap (clicked something by mistake? revert
  it and pick again)
- English / Portuguese interface toggle
- Local autosave — close the tab and resume right where you left off
- Fully offline after loading, on desktop, tablet or phone

## The bot

The automa is **Machina Agricola ("Mac")**, a fan-made bot created by **A.W.**
and published on BoardGameGeek:

> **[Machina Agricola — A bot for Agricola](https://boardgamegeek.com/filepage/231699/machina-agricola-a-bot-for-agricola)**

Mac plays as a full competitor: doubled room and animal capacities, skips its
own feeding and harvests, pays building resources but ignores food, occupation
and minor-improvement costs, and its farm doesn't need to be contiguous. Huge
thanks to A.W. for designing and sharing it — this companion only automates the
paperwork around those rules.

## Implementation

Built with the help of Claude AI. The whole thing is a single, self-contained
`index.html` — HTML, CSS and JS in one file, no build step and no dependencies.
The base action cards are embedded as images for on-screen reference and zoom.

## How to Play

1. Access the app by clicking
   [here](https://bira37.github.io/machina-agricola-automa/), or clone the
   project and open `index.html`
2. Choose how many Macs are playing (1–3) and whether **Farmers of the Moor** is
   in play
3. Each round: draw Mac's card, tap the first possible action, follow the
   on-screen instructions and adjust the counters the app doesn't handle for you
4. When Mac's plays run out, resolve the harvest if it's a harvest round (mark
   the breeding), then advance to the next round
5. After round 14, open **Detailed score** for the full, category-by-category
   breakdown

> **Note on the card order.** The action order shown on the cards is one reading
> of the print-and-play — play with your real cards and adjust if anything
> appears out of order.

No internet connection required after loading. Works on desktop, tablet and
phone. Your game state is saved locally, so if you close the browser and come
back later, everything will be right where you left it.

## License & Attribution

This is an unofficial fan project. It is not affiliated with or endorsed by the
publishers.

- **Agricola** is © Uwe Rosenberg / Lookout Games (Z-Man Games in English).
- The **Machina Agricola** bot is ©
  [A.W.](https://boardgamegeek.com/filepage/231699/machina-agricola-a-bot-for-agricola)
  — used with gratitude.
