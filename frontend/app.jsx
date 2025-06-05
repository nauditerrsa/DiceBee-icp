import React, { useState } from "react";

function App() {
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = async () => {
    if (rolling) return;  // Prevent double click

    setRolling(true);
    setDiceNumber(null);

    // Simulasi delay animasi rolling
    setTimeout(async () => {
      // Panggil backend canister (nanti pakai agent dari dfx)
      // Sementara kita mock dengan fetch
      try {
        // TODO: Ganti URL dan implementasi panggil canister sesungguhnya
        const response = await fetch("/api/rollDice");
        const data = await response.json();
        setDiceNumber(data.result);
      } catch (e) {
        // fallback random
        setDiceNumber(Math.floor(Math.random() * 6) + 1);
      } finally {
        setRolling(false);
      }
    }, 800);
  };

  return (
    <div>
      <h1>DiceBee 🎲</h1>
      <div className={`dice ${rolling ? "rolling" : ""}`}>
        {diceNumber ?? "?"}
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
}

export default App;
