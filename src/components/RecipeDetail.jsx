import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes, findSubstitution, scaleAmount } from './data';
import { Star, Clock, CheckCircle, Minus, Plus, UtensilsCrossed } from 'lucide-react';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = useMemo(() => recipes.find((r) => r.id === id), [id]);
  const [servings, setServings] = useState(2);
  const baseServings = 2; // demo baseline for scaling

  if (!recipe) {
    return (
      <section className="py-16 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <p>Recipe not found.</p>
          <Link className="underline" to="/world">Back to World Cuisines</Link>
        </div>
      </section>
    );
  }

  const factor = servings / baseServings;
  const similar = recipes.filter((r) => r.country === recipe.country && r.id !== recipe.id).slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-midnight to-midnight/95 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
              <div className="aspect-video" style={{backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{recipe.title}</h1>
                    <div className="mt-1 flex items-center gap-3 text-sm text-silver">
                      <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{recipe.time} min</span>
                      <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400" />{recipe.rating}</span>
                      <span>{recipe.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-silver">Servings</div>
                    <div className="mt-1 inline-flex items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                      <button onClick={() => setServings((s) => Math.max(1, s - 1))} className="p-2 hover:bg-white/10"><Minus className="h-4 w-4"/></button>
                      <span className="px-3 py-1 font-semibold">{servings}</span>
                      <button onClick={() => setServings((s) => s + 1)} className="p-2 hover:bg-white/10"><Plus className="h-4 w-4"/></button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-semibold mb-2">Ingredients</h2>
                    <ul className="space-y-2 text-sm">
                      {recipe.ingredients.map((ing, i) => {
                        const sub = findSubstitution(ing.name);
                        return (
                          <li key={i} className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                            <div className="flex items-center justify-between">
                              <span>{ing.name}</span>
                              <span className="text-silver">{scaleAmount(ing.amount, factor)}</span>
                            </div>
                            {sub && (
                              <div className="mt-2 text-xs text-silver">
                                Nepali alternative: <span className="text-white">{sub.nepal}</span>
                                <span className="block">{sub.notes}</span>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-semibold mb-2">Steps</h2>
                    <ol className="space-y-3 text-sm">
                      {recipe.steps.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 text-basil" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <h3 className="font-semibold">Nutrition (approx.)</h3>
                      <p className="text-xs text-silver mt-1">Calories depend on serving size. Increasing servings scales proportionally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="font-semibold">Similar recipes</h3>
              <div className="mt-3 space-y-3">
                {similar.length === 0 && <div className="text-sm text-silver">No similar recipes found.</div>}
                {similar.map((s) => (
                  <Link key={s.id} to={`/recipe/${s.id}`} className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5">
                    <div className="h-12 w-16 rounded-lg bg-white/10" style={{backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                    <div className="flex-1">
                      <div className="text-sm font-medium leading-tight">{s.title}</div>
                      <div className="text-xs text-silver">{s.time} min • {s.country}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="font-semibold flex items-center gap-2"><UtensilsCrossed className="h-4 w-4"/> Tips</h3>
              <ul className="mt-2 text-sm text-silver list-disc pl-5 space-y-1">
                <li>Toast whole spices to unlock aroma.</li>
                <li>Use ghee instead of butter for deeper flavor.</li>
                <li>Adjust heat with khursani or timur to taste.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
