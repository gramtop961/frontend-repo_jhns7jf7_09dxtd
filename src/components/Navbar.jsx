import { useState } from 'react';
import { Globe, Search, Map, Star, ChefHat } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-midnight/70 bg-midnight/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-silver hover:text-white transition-colors">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-saffron to-chili flex items-center justify-center shadow-lg shadow-saffron/30">
              <Globe className="h-5 w-5 text-midnight" />
            </div>
            <span className="font-semibold tracking-tight text-white">Global Kitchen Explorer</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-silver">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#world" className="hover:text-white transition-colors flex items-center gap-1"><Map className="h-4 w-4"/>World Cuisines</a>
            <a href="#categories" className="hover:text-white transition-colors">Categories</a>
            <a href="#calculator" className="hover:text-white transition-colors">Ingredient Calculator</a>
            <a href="#pantry" className="hover:text-white transition-colors">What Can I Make?</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>

          <form onSubmit={submit} className="hidden md:block">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find Recipes from Anywhere in the World"
                className="w-80 rounded-full bg-white/10 pl-10 pr-4 py-2 text-sm text-white placeholder-silver/70 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-saffron/60"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-silver" />
            </div>
          </form>

          <button className="md:hidden inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-silver ring-1 ring-white/10 hover:text-white hover:bg-white/15">
            <ChefHat className="h-4 w-4"/>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
