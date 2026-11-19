---
title: "MediaHub"
summary: "A self-hosted dashboard that unifies movies, shows, and music from multiple sources into one interface."
stack: ["React", "Go", "Docker", "PostgreSQL"]
status: "done"
order: 2
repo: "https://github.com/Mantie7553/MediaHub"
featured: true
cover:
    src: ./mediahub-cover.png
    alt: "MediaHub home view showing posters in a grid"
---

## Overview

MediaHub pulls together everything sitting on my home server, including movies, TV and music, and presents it in a single clean dashboard with search, filters, and watch history.

## Features

- Automatic metadata and poster fetching
- Unified search across every library
- Continue-watching row synced across devices
- One-command deploy with Docker Compose

## What I learned

This project was my deep dive into containerization and reverse proxies. Getting auth, HTTPS, and media streaming to play nicely together was the hardest and most rewarding part.
