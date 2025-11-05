import { useMemo, useState } from 'react';
import { recipes } from './data';
import { CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatCanIMake() {
  const [pantry, setPantry] = useState(['onion', 'garlic', 'tomato']);
  const [input, setInput] = useState('');

  const toggleAdd = () => {
    const val = input.trim().toLowerCase();
    if (!val) return;
    if (!pantry.includes(val)) setPantry((p) => [...p, val]);
    setInput('');
  };

  const remove = (i) => setPantry((p) => p.filter((_, idx) => idx !== i));

  const matches = useMemo(() => {
    return recipes
      .map((r) => {
        const ingNames = r.ingredients.map((i) => i.name.toLowerCase());
        const have = ingNames.filter((n) => pantry.some((p) => n.includes(p)));
        const score = have.length / ingNames.length;
        return { r, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);
  }, [pantry]);

  return (
    <section id="pantry" className="bg-gradient-to-b from-midnight to-midnight/95 text-white py-12 min-h-[60vh]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold">What Can I Make?</h1>
        <p className="text-silver text-sm">Tell us what you have. We’ll suggest dishes that fit your pantry.</p>

        <div className="mt-6">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., chicken, cumin, basil"
              className="flex-1 rounded-xl bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-saffron/60"
            />
            <button onClick={toggleAdd} className="rounded-xl bg-gradient-to-r from-saffron to-chili px-4 py-2 text-sm font-medium text-midnight shadow hover:opacity-95">
              Add
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {pantry.map((p, i) => (
              <span key={`${p}-${i}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/10">
                {p}
                <button onClick={() => remove(i)} className="text-silver hover:text-white">
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.length === 0 && <div className="text-silver">No matches yet. Add more items from your pantry.</div>}
          {matches.map(({ r, score }) => (
            <Link key={r.id} to={`/recipe/${r.id}`} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition block">
              <div className="aspect-video w-full bg-white/5" style={{backgroundImage: `url(${r.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{r.title}</h3>
                  <div className="text-xs text-silver">{Math.round(score * 100)}% match</div>
                </div>
                <div className="mt-2 text-xs text-silver flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-basil"/> Uses {Math.max(1, Math.round(score * r.ingredients.length))} of your items
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
