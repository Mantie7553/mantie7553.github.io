---
title: "Manga Manager"
summary: "A personal library tracker for manga volumes, reading progress, and wishlist releases."
stack: ["React", "TypeScript", "Node.js", "SQLite"]
status: "in-progress"
order: 1
---

## Overview

Manga Manager keeps track of every volume on the shelf, which chapter I left off on, and which upcoming releases are worth preordering. It started as a spreadsheet and got out of hand.

## Features

- Scan an ISBN barcode to add a volume instantly
- Per-series reading progress with "next up" suggestions
- Release calendar pulled from publisher feeds
- Duplicate detection so I stop buying volume 7 twice

## What I learned

Building the barcode flow taught me a lot about camera APIs on mobile browsers, and keeping the release calendar in sync forced me to get serious about background jobs and caching.
