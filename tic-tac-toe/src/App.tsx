import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
// <!-- New game menu start -->

// Pick player 1's mark
// Remember: X goes first

// New Game (vs CPU)
// New Game (vs player)

// <!-- New game menu end -->

// <!-- Game board start -->

// <!-- x/o icon --> turn

// X (You) <!-- Your score -->
// Ties <!-- Ties score -->
// X (CPU) <!-- CPU score -->

// Oh no, you lost
// You won!
// Player <!-- 1/2 --> wins!

// <!-- x/o icon --> takes the round
// Round tied
// Restart game?

// Quit
// Next round
// No, cancel
// Yes, restart

// <!-- Game board end -->
