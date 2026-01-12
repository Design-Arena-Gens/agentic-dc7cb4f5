import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Itineraries", href: "#itineraries" },
  { label: "Reviews", href: "#testimonials" },
];

const highlights = [
  {
    icon: "🌍",
    title: "Curated Journeys",
    description:
      "Handpicked destinations and hidden gems tailored to your travel style.",
  },
  {
    icon: "🏝️",
    title: "Luxury Stays",
    description:
      "Boutique resorts, eco-chic villas, and five-star experiences at every stop.",
  },
  {
    icon: "🧭",
    title: "Guided Ease",
    description:
      "Door-to-door planning with expert guides so you can travel worry-free.",
  },
];

const itineraries = [
  {
    title: "Azure Islands Escape",
    duration: "7 nights | Maldives & Mauritius",
    perks: ["Seaplane transfers", "Sunset reef dinners", "Underwater spa ritual"],
    price: "$4,650 per guest",
    accent: "from ocean lovers",
  },
  {
    title: "Mediterranean Reverie",
    duration: "10 nights | Amalfi Coast & Santorini",
    perks: ["Private catamaran", "Chef-led vineyard tour", "Cliffside suites"],
    price: "$6,240 per guest",
    accent: "for culture seekers",
  },
  {
    title: "Patagonia Awakening",
    duration: "8 nights | Chile & Argentina",
    perks: ["Glacier trekking", "Stargazer domes", "Sommelier campfires"],
    price: "$5,180 per guest",
    accent: "for wild hearts",
  },
];

const testimonials = [
  {
    quote:
      "Every detail was artfully handled. We saw the Maldives like locals with the comfort of VIP guests.",
    name: "Lauren & Victor",
    trip: "Azure Islands Escape, 2024",
  },
  {
    quote:
      "The culinary experiences in Italy were unforgettable. AzureWave knew exactly how to elevate every moment.",
    name: "Elena M.",
    trip: "Mediterranean Reverie, 2023",
  },
  {
    quote:
      "Our Patagonia adventure balanced thrill and tranquility perfectly. Easily the best trip we've ever taken.",
    name: "Marcos R.",
    trip: "Patagonia Awakening, 2024",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-wide text-cyan-300">
            AzureWave Adventures
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200 transition hover:bg-cyan-300/20"
          >
            Plan My Journey
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:py-20">
        <section
          id="hero"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.6)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="relative z-10 flex flex-col gap-8 p-10 md:flex-row md:gap-12 md:p-16">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                Bespoke Travel Atelier
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Crafting unforgettable journeys
                <span className="block text-cyan-200">
                  for the dreamers and explorers.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                AzureWave Adventures designs immersive escapes that blend
                luxury, culture, and sustainability. We tailor every itinerary
                to your rhythm, so all you need to do is arrive.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#itineraries"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Explore Signature Itineraries
                </Link>
                <Link
                  href="#experiences"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-200/60 px-7 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-200/10"
                >
                  See Experiences
                </Link>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-sm text-slate-300">
                <div>
                  <p className="text-3xl font-semibold text-white">120+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                    Tailored retreats
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">98%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                    Travelers recommend
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/50 p-8">
              <div className="flex items-center gap-3 text-sm text-cyan-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/20 text-2xl">
                  ✈️
                </span>
                <div>
                  <p className="font-semibold text-white">Complimentary teaser itinerary</p>
                  <p className="text-xs text-slate-400">
                    Delivered within 48 hours of consultation.
                  </p>
                </div>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 min-w-[10px] rounded-full bg-cyan-300" />
                  Dedicated travel designer available 24/7 during your escape.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 min-w-[10px] rounded-full bg-cyan-300" />
                  Carbon-conscious itineraries with offset partners in every region.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 min-w-[10px] rounded-full bg-cyan-300" />
                  Access to invitation-only experiences and private guides.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="experiences"
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 md:p-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Signature touchpoints
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Experience the AzureWave rhythm
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              From the first consultation to the farewell gift waiting back
              home, our team orchestrates every detail with precision and heart.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-8 transition hover:border-cyan-300/50 hover:shadow-[0_25px_60px_-35px_rgba(94,234,212,0.45)]"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="itineraries"
          className="rounded-3xl border border-white/10 bg-slate-950/60 p-10 md:p-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Signature itineraries
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Curated journeys ready to inspire
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Each itinerary is a starting point—personalize every element to
              match your celebration, honeymoon, or long-awaited sabbatical.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {itineraries.map((itinerary) => (
              <article
                key={itinerary.title}
                className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:border-cyan-300/60 hover:bg-slate-900/90"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    {itinerary.accent}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {itinerary.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {itinerary.duration}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {itinerary.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 min-w-[10px] rounded-full bg-cyan-300" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4">
                  <span className="text-sm font-medium text-slate-400">
                    Starts at
                  </span>
                  <span className="text-lg font-semibold text-cyan-200">
                    {itinerary.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="destinations"
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 md:p-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Destination palette
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Where azure horizons meet curated wonder
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Choose from over 60 hand-vetted locales across five continents.
              Every site is personally inspected and co-created with local
              storytellers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 transition duration-500 hover:scale-105 hover:opacity-80"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80')",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                    Coastal unveilings
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">Mediterranean Riviera</h3>
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-slate-200">
                  Dive into cliffside villages, private tastings, and golden-hour
                  sails along Italy, Greece, and the South of France.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 transition duration-500 hover:scale-105 hover:opacity-80"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                      Wild awakenings
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">Andean Peaks</h3>
                  </div>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-200">
                    Trek glaciers, sip Malbec under the stars, and unwind in
                    geothermal spas nestled in Patagonia.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 transition duration-500 hover:scale-105 hover:opacity-80"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                      Urban symphony
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      Tokyo & Kyoto Contrasts
                    </h3>
                  </div>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-200">
                    From contemporary art collectives to centuries-old tea
                    ceremonies—experience Japan&apos;s elegant duality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-10 md:p-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Traveler love letters
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Stories written miles from ordinary
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Hear how AzureWave travelers transformed their bucket-list dreams
              into effortless realities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8 transition hover:border-cyan-300/60"
              >
                <p className="text-sm leading-relaxed text-slate-200">
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">
                    {testimonial.trip}
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/20 via-cyan-300/20 to-cyan-200/10 p-10 md:p-16"
        >
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                Let’s create the extraordinary
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Share your vision, we’ll handcraft the rest
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-100">
                A dedicated AzureWave travel designer will schedule a 30-minute
                discovery call and deliver a concept itinerary within two days.
              </p>
            </div>
            <form className="w-full max-w-md space-y-4 rounded-2xl border border-white/20 bg-slate-950/70 p-6 shadow-lg shadow-cyan-300/10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ava Martinez"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="travelStyle" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                  Travel Style
                </label>
                <select
                  id="travelStyle"
                  name="travelStyle"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                  defaultValue="luxury"
                >
                  <option value="luxury">Luxury escape</option>
                  <option value="adventure">Adventure-forward</option>
                  <option value="wellness">Wellness retreat</option>
                  <option value="cultural">Culture immersion</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                  Dream getaway notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your perfect escape..."
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request My Concept Itinerary
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AzureWave Adventures. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#hero" className="transition hover:text-cyan-200">
              Back to top
            </Link>
            <Link href="#" className="transition hover:text-cyan-200">
              Travel Journal
            </Link>
            <Link href="#" className="transition hover:text-cyan-200">
              Sustainability Charter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
