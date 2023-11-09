import Clientes from './Sections/Clientes';
import Contacto from './Sections/Contacto';
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
      <Contacto/>
    </div>
  );
}

export default App;
