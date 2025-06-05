# DiceBee 🎲

DiceBee is a simple dice simulation project built on the Internet Computer (ICP) ecosystem.  
It features a Motoko backend canister that generates pseudo-random dice rolls, and a React frontend that displays the dice roll results with a smooth and natural UI experience.

---

## Project Structure
```
DiceBee/
├── .devcontainer/
├── backend/
│ └── app.mo # Motoko backend canister
├── frontend/
│ ├── App.jsx # React main app component
│ ├── index.html # HTML entry point
│ ├── style.css # CSS styles
│ └── main.jsx # React entry point
├── dfx.json # Dfinity project configuration
├── package.json # Frontend dependencies and scripts
└── README.md # This file
```

---

## Features

- **Backend Motoko Canister**: Generates pseudo-random dice rolls (1-6) using a stable seed and hashing.
- **React Frontend**: Clean, natural, and visually appealing dice UI with rolling animation.
- **Simple Interaction**: Click the "Roll Dice" button to get a new dice result from the backend.
- **Extensible**: Easily expand the dice faces, add multiplayer, or integrate with other ICP features.

---

## Prerequisites

- [DFINITY SDK (dfx)](https://internetcomputer.org/docs/current/developer-docs/install-upgrade-remove) installed
- Node.js and npm installed
- Basic knowledge of React and Motoko

---

## Contact
Created by [Your Name].
Feel free to reach out or contribute!

---

Enjoy rolling the dice with DiceBee! 🎲✨