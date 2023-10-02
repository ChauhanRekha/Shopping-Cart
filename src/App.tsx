import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
