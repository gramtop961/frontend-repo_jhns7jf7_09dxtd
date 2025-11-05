import { useMemo, useState } from 'react';
import { findSubstitution, scaleAmount } from './data';
import { Search, ArrowRight } from 'lucide-react';

export default function IngredientCalculator() {
  const [ingredient, setIngredient] = useState('butter');
  const [amount, setAmount] = useState('2 tbsp');
  const [servings, setServings] = useState(2);
  const [targetServings, setTargetServings] = useState(4);

  const sub = useMemo(() => findSubstitution(ingredient), [ingredient]);
  const factor = useMemo(() => (targetServings > 0 && servings > 0 ? targetServings / servings : 1), [servings, targetServings]);

  return (
    <section id="calculator" className="bg-gradient-to-b from-midnight to-midnight/95 text-white py-12 min-h-[60vh]">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-saffron to-chili flex items-center justify-center shadow-lg shadow-saffron/30">
            <Search className="h-5 w-5 text-midnight" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Ingredient Calculator</h1>
            <p className="text-silver text-sm">Scale amounts and get Nepali-friendly swaps instantly.</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-silver">Ingredient</label>
              <input value={ingredient} onChange={(e) => setIngredient(e.target.value)} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-saffron/60" />
            </div>
            <div>
              <label className="text-xs text-silver">Amount</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-saffron/60" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs text-silver">Current servings</label>
              <input type="number" min={1} value={servings} onChange={(e) => setServings(parseInt(e.target.value || '1'))} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-saffron/60" />
            </div>
            <div>
              <label className="text-xs text-silver">Target servings</label>
              <input type="number" min={1} value={targetServings} onChange={(e) => setTargetServings(parseInt(e.target.value || '1'))} className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-saffron/60" />
            </div>
            <div className="col-span-2 flex items-end text-silver text-sm">
              <ArrowRight className="h-4 w-4 mr-2" /> Factor: <span className="ml-1 text-white font-medium">x{Math.round(factor * 100) / 100}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <div className="text-sm">Scaled amount: <span className="font-semibold">{scaleAmount(amount, factor)}</span></div>
            {sub ? (
              <div className="mt-2 text-sm">
                Nepali alternative: <span className="font-semibold">{sub.nepal}</span>
                <div className="text-xs text-silver">{sub.notes}</div>
              </div>
            ) : (
              <div className="mt-2 text-sm text-silver">No direct substitution found. Try a different term.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
