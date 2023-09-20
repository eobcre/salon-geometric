import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Salon from './pages/Salon';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Book from './pages/Book';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/salon' element={<Salon />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
