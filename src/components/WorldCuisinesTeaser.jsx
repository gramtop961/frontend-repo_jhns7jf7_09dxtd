import { motion } from 'framer-motion';
import { Globe, Map, Clock, Star } from 'lucide-react';

const regions = [
  { key: 'italy', name: 'Italy', color: 'from-saffron to-chili', info: 'Pasta, risotto, trattoria classics', time: '40m', rating: 4.8 },
  { key: 'japan', name: 'Japan', color: 'from-basil to-lavender', info: 'Sushi, ramen, umami masters', time: '30m', rating: 4.7 },
  { key: 'mexico', name: 'Mexico', color: 'from-chili to-turmeric', info: 'Tacos, mole, street food vibes', time: '35m', rating: 4.6 },
  { key: 'nepal', name: 'Nepal', color: 'from-lavender to-basil', info: 'Momo, thukpa, local flavors', time: '45m', rating: 4.9 },
  { key: 'india', name: 'India', color: 'from-turmeric to-saffron', info: 'Curries, tandoor, spice journeys', time: '50m', rating: 4.8 },
  { key: 'france', name: 'France', color: 'from-silver to-lavender', info: 'Pastry, sauces, haute cuisine', time: '60m', rating: 4.7 },
];

export default function WorldCuisinesTeaser() {
  return (
    <section id="world" className="relative bg-gradient-to-b from-midnight to-midnight/95 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-saffron to-chili flex items-center justify-center shadow-lg shadow-chili/30">
            <Globe className="h-5 w-5 text-midnight"/>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">World Cuisines Explorer</h2>
            <p className="text-silver text-sm">Click a region to preview its recipes and local insights.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r, i) => (
            <motion.button
              key={r.key}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 text-left`}
              onClick={() => alert(`Exploring ${r.name} — sample interaction`)}
            >
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${r.color}`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold drop-shadow-sm">{r.name}</h3>
                    <p className="text-silver text-sm">{r.info}</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-1 text-xs ring-1 ring-white/10 flex items-center gap-1">
                    <Map className="h-3.5 w-3.5"/> Explore
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-silver text-xs">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5"/>{r.time}</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-400"/>{r.rating}</span>
                </div>

                <div className="mt-5">
                  <div className="h-28 w-full rounded-xl bg-gradient-to-tr from-white/10 to-white/0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
