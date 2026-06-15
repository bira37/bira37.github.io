# [Istanbul · Automa](https://bira37.github.io/istanbul-unofficial-automa/)

A web-based solo **automa** companion for **Istanbul** (Rüdiger Dorn / Pegasus
Spiele) — that also works as a standalone **board setup randomizer**. Playable
on any device directly in the browser, no installation required.

## About

Istanbul is one of the best euro games ever made, and playing it solo deserves a
proper opponent. This project implements the unofficial Automa rules as a clean,
mobile-friendly interface so you can focus on the game instead of managing a
separate deck by hand.

The automa simulates a competing merchant moving through the bazaar, collecting
rubies and triggering location effects — giving you a meaningful solo challenge
without heavy bookkeeping.

It doesn't have to be solo, though: the built-in board randomizer can be used on
its own to lay out a valid board, so it's handy for setting up a regular
multiplayer game with friends too — no automa required.

## Features

- Full automa logic for the base game and both expansions
- **Board setup randomizer** — generates a valid Place-tile layout respecting
  the official setup rules; usable on its own for any 2+ player game, with no
  automa involved
- English / Portuguese interface toggle
- Local autosave — close the tab and resume right where you left off
- Fully offline after loading, on desktop, tablet or phone

## Rules

The automa logic is based on the unofficial solo rules created by
[@kamarashev](https://boardgamegeek.com/profile/kamarashev) and published on
BoardGameGeek:

> **[Istanbul — Solo Automa Deck (Unofficial)](https://boardgamegeek.com/thread/2971961/istanbul-solo-automa-deck-unofficial)**

Big thanks to kamarashev for designing and sharing the rules. This project would
not exist without that work.

## Expansions

This implementation adds support for both official expansions:

- **Mocha & Baksheesh** — includes Coffee House, Roasting Plant, Guild Hall and
  Tavern locations with their respective automa behaviours
- **Letters & Seals** — includes Embassy, Kiosk, Auction House, Catacombs and
  Secret Society with full automa support

You can enable each expansion independently before starting a session.

## Implementation

Built with the help of Claude AI. The expansion cards are composited from the
author's original card art with the location text swapped in, to match the look
of the base deck.

## How to Play

1. Access the app by clicking
   [here](https://bira37.github.io/istanbul-unofficial-automa/), or clone the
   project and open `index.html`
2. Select which expansions are in play
3. Set up the board using the built-in **setup randomizer** — it shuffles the
   Place tiles following Istanbul's official rules (Fountain placement and the
   Black Market ↔ Tea House distance constraint) for a 4×4, 5×4 or 5×5 layout
   depending on the expansions in play. You can reshuffle anytime, or lay the
   board out manually if you prefer.
4. Use the app to draw and resolve automa cards each turn

> **Just need a board?** From the start screen you can pick the expansions and
> hit **"Randomize board"** to get a valid layout without starting an automa
> game — perfect for a normal multiplayer session.

No internet connection required after loading. Works on desktop, tablet and
phone. Your game state is saved locally, so if you close the browser and come
back later, everything will be right where you left it.

## License & Attribution

This is an unofficial fan project. Istanbul is © Rüdiger Dorn / Pegasus Spiele.
This tool is not affiliated with or endorsed by the publisher.

Automa rules © [kamarashev](https://boardgamegeek.com/profile/kamarashev) — used
with gratitude.
