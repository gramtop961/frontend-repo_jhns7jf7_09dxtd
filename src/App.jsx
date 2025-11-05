import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import IngredientCalculator from './components/IngredientCalculator';

export default function App() {
  const [lastSearch, setLastSearch] = useState('');

  return (
    <div className="min-h-screen bg-midnight text-white font-inter">
      <Navbar onSearch={setLastSearch} />
      <main>
        <Home onSearch={setLastSearch} lastSearch={lastSearch} />
        <IngredientCalculator />
      </main>
      <Footer />
    </div>
  );
}
