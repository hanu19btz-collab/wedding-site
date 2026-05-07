export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe8] text-[#4e382b] overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-sm mb-6 opacity-80">
            19 Septembrie 2026
          </p>

          <h1 className="text-6xl md:text-8xl italic mb-6 drop-shadow-2xl">
            Diana & Ciprian
          </h1>

          <p className="text-xl md:text-2xl leading-10 opacity-90">
            Și astfel începe pentru totdeauna...
            <br />
            Vă invităm să ne fiți alături în cea mai importantă zi din viața noastră.
          </p>

          <div className="mt-16 text-4xl animate-bounce">
            ↓
          </div>
        </div>
      </section>

      {/* EVENT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Civil */}
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl text-center border border-[#e7d8ca] hover:-translate-y-2 transition duration-300">
            <div className="text-6xl mb-6">💍</div>

            <h2 className="text-3xl italic mb-4">
              Cununia Civilă
            </h2>

            <p className="text-lg leading-9">
              Casa Căsătoriilor
              <br />
              Mangalia
              <br />
              Ora 16:00
            </p>

            <a
              href="https://maps.google.com/?q=Casa+Căsătoriilor+Mangalia"
              target="_blank"
              className="inline-block mt-8 bg-[#4e382b] text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>

          {/* Church */}
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl text-center border border-[#e7d8ca] hover:-translate-y-2 transition duration-300">
            <div className="text-6xl mb-6">⛪</div>

            <h2 className="text-3xl italic mb-4">
              Cununia Religioasă
            </h2>

            <p className="text-lg leading-9">
              Biserica Sf. Gheorghe
              <br />
              Mangalia
              <br />
              Ora 17:00
            </p>

            <a
              href="https://maps.google.com/?q=Biserica+Sf.+Gheorghe+Mangalia"
              target="_blank"
              className="inline-block mt-8 bg-[#4e382b] text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>

          {/* Party */}
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl text-center border border-[#e7d8ca] hover:-translate-y-2 transition duration-300">
            <div className="text-6xl mb-6">🥂</div>

            <h2 className="text-3xl italic mb-4">
              Petrecerea
            </h2>

            <p className="text-lg leading-9">
              Restaurant Atena
              <br />
              Saturn
              <br />
              Ora 19:30
            </p>

            <a
              href="https://maps.google.com/?q=Restaurant+Atena+Saturn"
              target="_blank"
              className="inline-block mt-8 bg-[#4e382b] text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Vezi locația
            </a>
          </div>

        </div>
      </section>

      {/* FAMILY */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-16 shadow-2xl border border-[#e7d8ca] text-center">

          <p className="uppercase tracking-[0.4em] text-sm opacity-60 mb-6">
            Familia
          </p>

          <h2 className="text-5xl italic mb-12">
            Alături de cei dragi
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-xl leading-10">

            <div className="bg-[#f7f1eb] rounded-[2rem] p-10">
              Elena și Mugurel Olteanu
            </div>

            <div className="bg-[#f7f1eb] rounded-[2rem] p-10">
              Elena și Constantin Onodea
            </div>

          </div>

          <div className="mt-10 bg-[#f7f1eb] rounded-[2rem] p-10 text-xl leading-10">
            Nașii noștri dragi
            <br />
            <span className="italic text-3xl">
              Lavinia și Dănuț Marian
            </span>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#4e382b] text-white rounded-[3rem] p-16 shadow-2xl text-center">

          <p className="uppercase tracking-[0.4em] text-sm opacity-70 mb-6">
            RSVP
          </p>

          <h2 className="text-5xl italic mb-8">
            Vă așteptăm cu drag!
          </h2>

          <p className="text-lg leading-9 opacity-90 mb-12 max-w-2xl mx-auto">
            Vă rugăm să ne confirmați prezența până la data de
            1 Septembrie 2026.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <a
              href="tel:0785050154"
              className="bg-white/10 rounded-[2rem] p-10 hover:bg-white/20 transition"
            >
              <div className="text-3xl italic mb-4">
                Diana
              </div>

              <div className="tracking-[0.2em]">
                0785 050 154
              </div>
            </a>

            <a
              href="tel:0752146011"
              className="bg-white/10 rounded-[2rem] p-10 hover:bg-white/20 transition"
            >
              <div className="text-3xl italic mb-4">
                Ciprian
              </div>

              <div className="tracking-[0.2em]">
                0752 146 011
              </div>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}