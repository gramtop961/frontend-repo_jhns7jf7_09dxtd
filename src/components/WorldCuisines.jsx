import { useMemo, useState } from 'react';
import { recipes } from './data';
import { Map, Star, Filter, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const regions = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

export default function WorldCuisines() {
  const [q, setQ] = useState('');
  const [region, setRegion] = useState('All');

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesQ = r.title.toLowerCase().includes(q.toLowerCase()) || r.country.toLowerCase().includes(q.toLowerCase());
      const matchesRegion = region === 'All' ? true : r.region === region || r.country === region;
      return matchesQ && matchesRegion;
    });
  }, [q, region]);

  return (
    <section className="bg-gradient-to-b from-midnight to-midnight/95 text-white py-12 min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-saffron to-chili flex items-center justify-center shadow-lg shadow-chili/30">
              <Map className="h-5 w-5 text-midnight" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">World Cuisines</h1>
              <p className="text-silver text-sm">Browse regions, pick a country, and dive into signature dishes.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search country or dish"
                className="w-full rounded-xl bg-white/10 px-3 py-3 text-sm text-white placeholder-silver/70 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-saffron/60"
              />
            </div>
            <div className="inline-flex items-center gap-2 text-silver">
              <Filter className="h-4 w-4" /> Filters
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 text-xs text-silver">
            <Sliders className="h-4 w-4" />
            Region:
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-lg bg-white/10 px-2 py-1 ring-1 ring-white/10 outline-none">
              {['All', ...regions].map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <Link key={r.id} to={`/recipe/${r.id}`} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition block">
              <div className="aspect-video w-full bg-white/5" style={{backgroundImage: `url(${r.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{r.title}</h3>
                  <div className="text-xs text-silver">{r.country}</div>
                </div>
                <div className="mt-1 flex items-center gap-3 text-xs text-silver">
                  <span>{r.time} min</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-400" />{r.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
