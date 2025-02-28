import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createFraction, power, add, Fraction, multiply } from '../lib/main';

function App() {
  const [count, setCount] = createSignal(0);

  const f = new Fraction(2,3);
  const g = new Fraction(4,3);
  const h = new Fraction(2,3);


  console.log(`${multiply(f,g,h)}`);
  f.multiply(2,2);
  console.log(`${f}`);
  const xx = Math.random() > 0.5 ? true : false;
  const x = f.shorten(xx);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
