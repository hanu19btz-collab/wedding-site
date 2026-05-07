export default function WeddingInvitation() {
  const eventDate = new Date("2026-09-19T16:00:00");

  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  );
  const minutes = Math.max(
    0,
    Math.floor((diff / (1000 * 60)) % 60)
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f0ea] text-[#4a3427] font-serif">

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center px-4 sm:px-6 py-10 md:py-20">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f6f0ea] to-transparent" />

        <div className="relative z-10 text-center text-white max-w-5xl px-2">

          <div className="tracking-[0.5em] uppercase text-xs sm:text-sm md:text-base mb-8 opacity-80">
            19 Septembrie 2026
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] italic leading-none drop-shadow-2xl">
            Diana
          </h1>

          <div className="text-2xl md:text-4xl my-4 opacity-80">
            &
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] italic leading-none drop-shadow-2xl">
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

      {/* EVENTS */}
      <section className="px-4 sm:px-6 py-16 md:py-24 relative">

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(180,140,110,0.25),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">

          {/* CIVIL */}
          <div className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">

            <div className="text-5xl md:text-6xl mb-6">
              💍
            </div>

            <div className="uppercase tracking-[0.4em] text-xs md:text-sm mb-3 text-[#a07d63]">
              Cununia Civilă
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">
              Mangalia
            </h3>

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

          {/* CHURCH */}
          <div className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">

            <div className="text-5xl md:text-6xl mb-6">
              ⛪
            </div>

            <div className="uppercase tracking-[0.4em] text-xs md:text-sm mb-3 text-[#a07d63]">
              Cununia Religioasă
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">
              Sf. Gheorghe
            </h3>

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

          {/* PARTY */}
          <div className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center group bg-white/80 backdrop-blur rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-[#eaded3] hover:-translate-y-2 transition duration-500 text-center">

            <div className="text-5xl md:text-6xl mb-6">
              🥂
            </div>

            <div className="uppercase tracking-[0.4em] text-xs md:text-sm mb-3 text-[#a07d63]">
              Petrecerea
            </div>

            <h3 className="text-2xl md:text-3xl italic mb-5">
              Restaurant Atena
            </h3>

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
    </main>
  );
}