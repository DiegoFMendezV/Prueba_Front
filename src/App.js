import Header from './Sections/Header';
import Servicios from './Sections/Servicios';
import Equipo from './Sections/Equipo';
import Clientes from './Sections/Clientes';
import Contacto from './Sections/Contacto';
import Footer from './Sections/Footer';

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
