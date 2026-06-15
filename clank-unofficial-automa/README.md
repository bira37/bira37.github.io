# [Clank! Catacombs · Automa](https://bira37.github.io/clank-catacombs/)

A web-based solo **automa** companion for **Clank! Catacombs** (Dire Wolf
Digital) — featuring **two different automa opponents** to suit how heavy you
want your solo game to be. Playable on any device directly in the browser, no
installation required.

## About

Clank! Catacombs is a deck-building dungeon crawl, and a good solo run needs a
rival worth racing against. This project implements two unofficial automa
opponents as a clean, mobile-friendly interface, so you can focus on diving the
catacombs instead of shuffling a separate AI deck and tracking it by hand.

The app handles the rules, the dice, state tracking and end-game scoring. You
stay in charge of your own dungeon run — the automa is taken care of for you.

## The two opponents

Pick your rival on the start screen:

- **Laura** — a light, elegant ghost that hoards loot and dumps Clank! without
  ever walking the dungeon. The app does almost everything; great when you want
  a quick, low-overhead solo game. Single difficulty.
- **Rival Thief** — an immersive opponent that actually navigates the dungeon.
  You act as its eyes on the board, and the app guides it step by step (movement
  priority, the d8 draw, Clank!, scoring). More present and more hands-on, with
  **three difficulties**: Thief, Master Thief and Dungeon Lord.

## Features

- Two solo automa opponents (Laura and the Rival Thief) selectable per session
- Guided, self-explanatory turn flow for the Rival Thief — built so you can play
  it even if you've never seen the bot before
- Automatic dice (the d8 for the Rival Thief), state tracking and end-game
  scoring, including the difficulty scoring multiplier
- Health / escape meter and a dragon-attack logger
- English / Portuguese interface toggle
- Local autosave — close the tab and resume right where you left off
- Fully offline after loading, on desktop, tablet or phone

## Rules

This app implements two unofficial fan-made automa systems:

> **Laura** is based on the original Laura solo automa by
> **[Lines J. Hutter](https://boardgamegeek.com/user/Lines42)** (created for
> _Clank!_), adapted for _Clank! Catacombs_ by the BoardGameGeek community
> (Jakob, Christian and Stijn).

> **Rival Thief** is based on the dungeon-navigating
> **[Clank! Catacombs AI for Solo Play (Fan-made)](https://boardgamegeek.com/filepage/250882/clank-catacombs-ai-for-solo-play-fan-made)**
> by **dbott**.

Big thanks to Lines J. Hutter, dbott and the BGG community for designing and
sharing these rules. This project would not exist without that work.

## Implementation

Built with the help of Claude AI. It's a single self-contained `index.html`
(HTML/CSS/JS, no build step, no dependencies beyond web fonts). Laura's AI cards
were transcribed and verified against the original automa sheet; the Rival
Thief's turn logic, priorities, dice and scoring follow dbott's rules.

## How to Play

1. Access the app by clicking [here](https://bira37.github.io/clank-catacombs/),
   or clone the project and open `index.html`
2. Pick your opponent — **Laura** for a light game, or the **Rival Thief** for
   an immersive one (and choose its difficulty)
3. Set up a normal solo game of Clank! Catacombs following the in-app setup
   notes
4. On the automa's turn, tap its turn button and follow the prompts — the app
   tells you exactly what the bot does, handles the rolls, and keeps its score
5. At the end, the app totals the automa's score for you to compare against
   yours

No internet connection required after loading. Works on desktop, tablet and
phone. Your game state is saved locally, so if you close the browser and come
back later, everything will be right where you left it.

## License & Attribution

This is an unofficial fan project. Clank! Catacombs is © Dire Wolf Digital. This
tool is not affiliated with or endorsed by the publisher.

- Laura automa © [Lines J. Hutter](https://boardgamegeek.com/user/Lines42),
  adapted to Catacombs by the BGG community — used with gratitude.
- Rival Thief automa ©
  [dbott](https://boardgamegeek.com/filepage/250882/clank-catacombs-ai-for-solo-play-fan-made)
  — used with gratitude.
