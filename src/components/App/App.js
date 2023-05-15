
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Maps from '../Mapas/Mapa';

function App() {
  return (
    <div className="App">
    <button className="btn btn-danger">Proyecto Google Maps con React y Api externa</button>
    <header>
      <p>
        M.A.Seiz - Mayo 2023 - Ejercicio Proyecto F5 Madrid.
      </p>
    </header>
    <Maps /> 
    </div>
  );
}

export default App;
