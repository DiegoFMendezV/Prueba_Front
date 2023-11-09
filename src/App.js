import Header from './Sections/Header/Header';
import Servicios from './Sections/Servicios/Servicios';
import Equipo from './Sections/Equipo/Equipo';
import Clientes from './Sections/Clientes/Clientes';
import Contacto from './Sections/Contacto/Contacto';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Equipo />
      <Clientes />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
