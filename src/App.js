import Clientes from './Sections/Clientes';
import Equipo from './Sections/Equipo';
import Header from './Sections/Header';
import Servicios from './Sections/Servicios';

function App() {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Equipo />
      <Clientes/>
    </div>
  );
}

export default App;
