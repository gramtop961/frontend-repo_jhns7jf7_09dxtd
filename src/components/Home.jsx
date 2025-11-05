import Hero3D from './Hero3D';
import WorldCuisinesTeaser from './WorldCuisinesTeaser';

export default function Home({ onSearch, lastSearch }) {
  return (
    <>
      <Hero3D onSearch={onSearch} />

      {lastSearch && (
        <section className="bg-midnight/95 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-silver text-sm">Showing results for: <span className="text-white font-medium">{lastSearch}</span> (demo)</p>
          </div>
        </section>
      )}

      <WorldCuisinesTeaser />

      <section id="categories" className="bg-gradient-to-b from-midnight/95 to-midnight py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Categories</h2>
          <p className="text-silver text-sm">Cuisine • Meal Type • Dietary • Occasion • Method</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Cuisine', 'Meal Type', 'Dietary', 'Occasion', 'Method'].map((c, i) => (
              <div key={c} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:ring-white/20 transition">
                <div className={`h-14 w-full rounded-xl bg-gradient-to-br ${['from-saffron to-chili','from-basil to-lavender','from-turmeric to-saffron','from-chili to-turmeric','from-silver to-lavender'][i]} opacity-30`} />
                <div className="mt-3 font-medium">{c}</div>
                <div className="text-xs text-silver">Explore {c.toLowerCase()} collections</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
