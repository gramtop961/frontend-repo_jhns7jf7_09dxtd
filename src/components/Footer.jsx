export default function Footer() {
  return (
    <footer id="about" className="bg-midnight border-t border-white/10 text-silver">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold">Global Kitchen Explorer</h4>
            <p className="mt-2 text-sm">Visually breathtaking, highly interactive, and practical for Nepali cooks with local ingredient insights.</p>
          </div>
          <div>
            <h5 className="text-white font-medium">Stay in the loop</h5>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-silver/70 ring-1 ring-white/10 focus:ring-2 focus:ring-saffron/60 outline-none"/>
              <button type="submit" className="rounded-lg bg-gradient-to-r from-saffron to-chili px-4 py-2 text-sm font-medium text-midnight shadow hover:opacity-95">Subscribe</button>
            </form>
          </div>
          <div>
            <h5 className="text-white font-medium">Credits</h5>
            <p className="mt-2 text-sm">Powered by interactive 3D and modern web tech. Follow us on social media and share your culinary journeys.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs flex items-center justify-between">
          <span>© {new Date().getFullYear()} Global Kitchen Explorer</span>
          <span className="animate-pulse">🍜 Global cuisine trivia: Did you know saffron is more valuable by weight than gold?</span>
        </div>
      </div>
    </footer>
  );
}
