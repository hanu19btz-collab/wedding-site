export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe8] text-[#4e382b]">
      <section className="h-screen flex items-center justify-center bg-[#4e382b] text-white text-center px-6">
        <div>
          <p className="uppercase tracking-[0.4em] text-sm mb-6 opacity-70">
            19 Septembrie 2026
          </p>

          <h1 className="text-6xl md:text-8xl italic mb-8">
            Diana & Ciprian
          </h1>

          <p className="max-w-2xl mx-auto text-xl leading-10 opacity-90">
            Vă invităm să ne fiți alături la celebrarea căsătoriei noastre.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[2rem] p-10 shadow-xl text-center">
            <div className="text-5xl mb-6">💍</div>

            <h2 className="text-3xl italic mb-4">
              Cununia Civilă
            </h2>

            <p className="text-lg leading-8">
              Casa Căsătoriilor
              <br />
              Mangalia
              <br />
              Ora 16:00
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-xl text-center">
            <div className="text-5xl mb-6">⛪</div>

            <h2 className="text-3xl italic mb-4">
              Cununia Religioasă
            </h2>

            <p className="text-lg leading-8">
              Biserica Sf. Gheorghe
              <br />
              Mangalia
              <br />
              Ora 17:00
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-xl text-center">
            <div className="text-5xl mb-6">🥂</div>

            <h2 className="text-3xl italic mb-4">
              Petrecerea
            </h2>

            <p className="text-lg leading-8">
              Restaurant Atena
              <br />
              Saturn
              <br />
              Ora 19:30
            </p>
          </div>

        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#4e382b] text-white rounded-[3rem] p-16 text-center">

          <p className="uppercase tracking-[0.4em] text-sm opacity-70 mb-6">
            RSVP
          </p>

          <h2 className="text-5xl italic mb-8">
            Vă așteptăm cu drag!
          </h2>

          <p className="text-lg leading-8 opacity-90 mb-12">
            Vă rugăm să ne confirmați prezența până la
            1 Septembrie 2026.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/10 rounded-[2rem] p-8">
              <div className="text-3xl italic mb-3">
                Diana
              </div>

              <div>
                0785 050 154
              </div>
            </div>

            <div className="bg-white/10 rounded-[2rem] p-8">
              <div className="text-3xl italic mb-3">
                Ciprian
              </div>

              <div>
                0752 146 011
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}