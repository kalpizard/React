import logo from "./logo.svg";
import "./App.css";
import GameList from "./components/GameList";
import Counter from "./components/Counter";
import Navigation from "./components/Navigation";

function Welcome({ name }) {
  return <h1> Hola, {name}</h1>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navigation isSessionStarted={true} />
        {/* <nav className="App-nav">
        </nav> */}
      </header>

      <div>
        <Welcome name="Nico" />
        <GameList />
        <Counter />
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className="App-nav">
//          
//           <ul>
//             <li>
//               <a href="#inicio">Inicio</a>
//             </li>
//             <li>
//               <a href="#sesion">Sesión</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <div>
//         <Welcome name="Nico" />
//         <GameList />
//       </div>
//     </div>
//   );
// }

// export default App;