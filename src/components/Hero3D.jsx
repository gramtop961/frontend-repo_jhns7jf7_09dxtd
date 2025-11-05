import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';

export default function Hero3D({ onSearch }) {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(q);
  };

  return (
    <section id="home" className="relative min-h-[78vh] w-full overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight/30 via-midnight/60 to-midnight" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-midnight" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-silver">
          Futuristic Food Discovery
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-saffron via-chili to-turmeric drop-shadow">
          Explore Global Cuisines in 3D
        </h1>
        <p className="mt-4 max-w-2xl text-silver">
          Search thousands of recipes from every corner of the world, with smart Nepali ingredient alternatives.
        </p>

        <form onSubmit={submit} className="mt-8 w-full max-w-2xl">
          <div className="relative group">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Find Recipes from Anywhere in the World"
              className="w-full rounded-2xl bg-white/10 pl-12 pr-4 py-4 text-base text-white placeholder-silver/70 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-saffron/70 shadow-xl shadow-saffron/10"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-silver" />
          </div>
        </form>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-silver">Saffron Gold</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-silver">Chili Red</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-silver">Turmeric Yellow</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-silver">Basil Green</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 text-silver">Lavender Purple</span>
        </div>
      </div>
    </section>
  );
}
