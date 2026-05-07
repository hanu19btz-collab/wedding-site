// NEXT.JS + TAILWIND READY
// 1. Creezi proiect nou: npx create-next-app@latest wedding-invitation
// 2. Înlocuiești tot din app/page.js cu acest cod
// 3. Rulezi: npm run dev
// 4. Upload pe Vercel pentru publicare online

export default function WeddingInvitation() {
  const eventDate = new Date('2026-09-19T16:00:00');

  const now = new Date();
  const diff = eventDate - now;

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f0ea] text-[#4a3427] font-serif">
      <section className="relative min-h-\[100svh\] flex items-center justify-center px-4 sm:px-6 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center scale-105" />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f6f0ea] to-transparent" />

        <div className="relative z-10 text-center text-white max-w-5xl px-2">
          <div className="tracking-[0.5em] uppercase text-sm md:text-base mb-8 opacity-80">
            19 Septembrie 2026
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-\[9rem\] italic leading-none drop-shadow-2xl">
            Diana
          </h1>

          <div className="text-2xl md:text-4xl my-4 opacity-80">&</div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-\[9rem\] italic leading-none drop-shadow-2xl">
            Ciprian
          </h1>

          <div className="mt-8 md:mt-10 text-base sm:text-lg md:text-2xl leading-8 md:leading-10 max-w-3xl mx-auto font-light">
            Și astfel începe pentru totdeauna...
            <br />
            Vă invităm să ne fiți alături în cea mai importantă zi din viața noastră.
          </div>

          <div className="mt-16 animate-bounce text-3xl opacity-70">
            ↓
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-24-6 py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(180,140,110,0.25),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">
            <div className="text-5xl md:text-6xl mb-6">💍</div>

            <div className="uppercase tracking-[0.4em] text-sm mb-3 text-[#a07d63]">
              Cununia Civilă
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">Mangalia</h3>

            <p className="text-base md:text-lg leading-7 md:leading-8">
              Casa Căsătoriilor
              <br />
              Ora 16:00
            </p>

            <a
              href="https://maps.google.com/?q=Casa+Căsătoriilor+Mangalia"
              target="_blank"
              className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#5f4535] text-white hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">
            <div className="text-5xl md:text-6xl mb-6">⛪</div>

            <div className="uppercase tracking-[0.4em] text-sm mb-3 text-[#a07d63]">
              Cununia Religioasă
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">Sf. Gheorghe</h3>

            <p className="text-base md:text-lg leading-7 md:leading-8">
              Biserica Sf. Gheorghe
              <br />
              Ora 17:00
            </p>

            <a
              href="https://maps.google.com/?q=Biserica+Sf.+Gheorghe+Mangalia"
              target="_blank"
              className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#5f4535] text-white hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>

          <div className="group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">
            <div className="text-5xl md:text-6xl mb-6">🥂</div>

            <div className="uppercase tracking-[0.4em] text-sm mb-3 text-[#a07d63]">
              Petrecerea
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">Restaurant Atena</h3>

            <p className="text-base md:text-lg leading-7 md:leading-8">
              Saturn
              <br />
              Ora 19:30
            </p>

            <a
              href="https://maps.google.com/?q=Restaurant+Atena+Saturn"
              target="_blank"
              className="inline-block mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#5f4535] text-white hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[#eaded3]">
          <div className="bg-[url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 px-4 sm:px-8 py-16 md:py-24 text-center text-white">
              <div className="uppercase tracking-[0.5em] text-sm opacity-70 mb-6">
                Countdown
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-7xl md:text-7xl italic mb-10 md:mb-14">
                Până la marele moment
              </h2>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur rounded-[1.5rem] md:rounded-[2rem] py-6 md:py-10 border border-white/10">
                  <div className="text-3xl sm:text-4xl md:text-7xl font-light">{days}</div>
                  <div className="mt-4 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">Zile</div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-[1.5rem] md:rounded-[2rem] py-6 md:py-10 border border-white/10">
                  <div className="text-3xl sm:text-4xl md:text-7xl font-light">{hours}</div>
                  <div className="mt-4 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">Ore</div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-[1.5rem] md:rounded-[2rem] py-6 md:py-10 border border-white/10">
                  <div className="text-3xl sm:text-4xl md:text-7xl font-light">{minutes}</div>
                  <div className="mt-4 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm">Minute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="uppercase tracking-[0.4em] text-sm text-[#a07d63] mb-6">
            Familia
          </div>

          <h2 className="text-3xl md:text-5xl italic mb-10 md:mb-12">
            Alături de cei dragi
          </h2>

          <div className="grid grid-cols-1 md:grid-cotext-lg md:text-xl leading-8 md:leading-1010 text-lg md:text-xl leading-8 md:leading-10">
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#eaded3]">
              Elena și Mugurel Olteanu
            </div>

            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#eaded3]">
              Elena și Constantin Onodea
            </div>
          </div>

          <div className="mt-10 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#eaded3] text-xl leading-10">
            Nașii noștri dragi
            <br />
            <span className="italic text-2xl md:text-3xl">Lavinia și Dănuț Marian</span>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 md:pb-28">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-[#4e382b] text-white relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

          <div className="relative z-10 px-4 sm:px-8 py-16 md:py-24 text-center">
            <div className="uppercase tracking-[0.4em] text-sm opacity-70 mb-6">
              RSVP
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl italic mb-8">
              Vă așteptăm cu drag!
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg leading-8 md:leading-9 opacity-90 mb-14">
              Vă rugăm să ne confirmați prezența până la data de 1 Septembrie 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              <a
                href="tel:0785050154"
                className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur px-6 md:px-8 py-6 md:py-8 hover:scale-105 transition duration-300"
              >
                <div className="text-2xl md:text-3xl italic mb-3">Diana</div>
                <div className="tracking-[0.2em]">0785 050 154</div>
              </a>

              <a
                href="tel:0752146011"
                className="rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur px-6 md:px-8 py-6 md:py-8 hover:scale-105 transition duration-300"
              >
                <div className="text-2xl md:text-3xl italic mb-3">Ciprian</div>
                <div className="tracking-[0.2em]">0752 146 011</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
