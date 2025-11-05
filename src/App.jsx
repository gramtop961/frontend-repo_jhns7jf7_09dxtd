import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import WorldCuisines from './components/WorldCuisines';
import RecipeDetail from './components/RecipeDetail';
import IngredientCalculator from './components/IngredientCalculator';
import WhatCanIMake from './components/WhatCanIMake';

export default function App() {
  const [lastSearch, setLastSearch] = useState('');

  return (
    <div className="min-h-screen bg-midnight text-white font-inter">
      <BrowserRouter>
        <Navbar onSearch={setLastSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home onSearch={setLastSearch} lastSearch={lastSearch} />} />
            <Route path="/world" element={<WorldCuisines />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/calculator" element={<IngredientCalculator />} />
            <Route path="/pantry" element={<WhatCanIMake />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
