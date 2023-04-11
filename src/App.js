import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  let year = new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en react - Hook UseState</h1>
        <MiPrimerEstado />
        <hr />
        <EjercicioComponent year={year} />
      </header>
    </div>
  );
}

export default App;
