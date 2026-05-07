"use client";

import { useEffect, useState } from "react";

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-09-19T16:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f0ea] text-[#4a3427] font-serif">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl py-24">

          <div className="tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 opacity-80">
            19 Septembrie 2026
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl italic leading-none drop-shadow-2xl">
            Diana
          </h1>

          <div className="text-2xl md:text-4xl my-3 opacity-80">
            &
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl italic leading-none drop-shadow-2xl">
            Ciprian
          </h1>

          <div className="mt-8 text-base sm:text-lg md:text-2xl leading-8 md:leading-10 max-w-3xl mx-auto font-light">
            Și astfel începe pentru totdeauna...
            <br />
            Vă invităm să ne fiți alături în cea mai importantă zi din viața noastră.
          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section className="px-3 sm:px-6 py-14 md:py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 md:gap-8">

          {/* CIVIL */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 sm:p-4 md:p-10 shadow-2xl border border-[#eaded3] text-center flex flex-col justify-between">

            <div>
              <div className="text-3xl md:text-6xl mb-3 md:mb-6">
                💍
              </div>

              <div className="uppercase tracking-[0.15em] md:tracking-[0.4em] text-[9px] md:text-sm mb-2 md:mb-3 text-[#a07d63]">
                Civilă
              </div>

              <h3 className="text-sm sm:text-base md:text-3xl italic mb-2 md:mb-5">
                Mangalia
              </h3>

              <p className="text-[11px] sm:text-xs md:text-lg leading-4 md:leading-8">
                Casa Căsătoriilor
                <br />
                16:00
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Casa+Căsătoriilor+Mangalia"
              target="_blank"
              className="inline-block mt-6 px-2 sm:px-3 md:px-8 py-2 md:py-4 rounded-full bg-[#5f4535] text-white text-[10px] sm:text-xs md:text-base"
            >
              Locație
            </a>
          </div>

          {/* CHURCH */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 sm:p-4 md:p-10 shadow-2xl border border-[#eaded3] text-center flex flex-col justify-between">

            <div>
              <div className="text-3xl md:text-6xl mb-3 md:mb-6">
                ⛪
              </div>

              <div className="uppercase tracking-[0.15em] md:tracking-[0.4em] text-[9px] md:text-sm mb-2 md:mb-3 text-[#a07d63]">
                Religioasă
              </div>

              <h3 className="text-sm sm:text-base md:text-3xl italic mb-2 md:mb-5">
                Sf. Gheorghe
              </h3>

              <p className="text-[11px] sm:text-xs md:text-lg leading-4 md:leading-8">
                Biserica
                <br />
                17:00
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Biserica+Sf.+Gheorghe+Mangalia"
              target="_blank"
              className="inline-block mt-6 px-2 sm:px-3 md:px-8 py-2 md:py-4 rounded-full bg-[#5f4535] text-white text-[10px] sm:text-xs md:text-base"
            >
              Locație
            </a>
          </div>

          {/* PARTY */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 sm:p-4 md:p-10 shadow-2xl border border-[#eaded3] text-center flex flex-col justify-between">

            <div>
              <div className="text-3xl md:text-6xl mb-3 md:mb-6">
                🥂
              </div>

              <div className="uppercase tracking-[0.15em] md:tracking-[0.4em] text-[9px] md:text-sm mb-2 md:mb-3 text-[#a07d63]">
                Petrecerea
              </div>

              <h3 className="text-sm sm:text-base md:text-3xl italic mb-2 md:mb-5">
                Atena
              </h3>

              <p className="text-[11px] sm:text-xs md:text-lg leading-4 md:leading-8">
                Saturn
                <br />
                19:30
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Restaurant+Atena+Saturn"
              target="_blank"
              className="inline-block mt-6 px-2 sm:px-3 md:px-8 py-2 md:py-4 rounded-full bg-[#5f4535] text-white text-[10px] sm:text-xs md:text-base"
            >
              Locație
            </a>
          </div>

        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="px-4 sm:px-6 py-12 md:py-24">

        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-[#4e382b] text-white">

          <div className="px-4 sm:px-8 py-12 md:py-20 text-center">

            <div className="uppercase tracking-[0.4em] text-xs md:text-sm opacity-70 mb-6">
              Countdown
            </div>

            <h2 className="text-3xl md:text-6xl italic mb-10">
              Până la marele moment
            </h2>

            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">

              <div className="bg-white/10 rounded-[1.5rem] py-5 md:py-10">
                <div className="text-3xl md:text-6xl">
                  {timeLeft.days}
                </div>

                <div className="mt-2 uppercase text-[10px] md:text-sm tracking-[0.2em]">
                  Zile
                </div>
              </div>

              <div className="bg-white/10 rounded-[1.5rem] py-5 md:py-10">
                <div className="text-3xl md:text-6xl">
                  {timeLeft.hours}
                </div>

                <div className="mt-2 uppercase text-[10px] md:text-sm tracking-[0.2em]">
                  Ore
                </div>
              </div>

              <div className="bg-white/10 rounded-[1.5rem] py-5 md:py-10">
                <div className="text-3xl md:text-6xl">
                  {timeLeft.minutes}
                </div>

                <div className="mt-2 uppercase text-[10px] md:text-sm tracking-[0.2em]">
                  Min
                </div>
              </div>

              <div className="bg-white/10 rounded-[1.5rem] py-5 md:py-10">
                <div className="text-3xl md:text-6xl">
                  {timeLeft.seconds}
                </div>

                <div className="mt-2 uppercase text-[10px] md:text-sm tracking-[0.2em]">
                  Sec
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="px-4 sm:px-6 py-12 md:py-24">

        <div className="max-w-5xl mx-auto text-center">

          <div className="uppercase tracking-[0.4em] text-xs md:text-sm text-[#a07d63] mb-6">
            Familia
          </div>

          <h2 className="text-3xl md:text-5xl italic mb-10">
            Alături de mamele noastre
            <br />
            și purtând în inimă pe cei care ne lipsesc
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-10">

            {/* FAMILY 1 */}
            <div className="bg-white rounded-[1.5rem] p-4 sm:p-6 md:p-10 shadow-xl border border-[#eaded3] text-center">

              <div className="flex items-center justify-center gap-2 text-sm sm:text-lg md:text-4xl italic leading-relaxed">

                Elena și Mugurel

                <span className="opacity-70 text-lg md:text-3xl">
                  🕊️
                </span>

              </div>

              <div className="mt-4 tracking-[0.25em] uppercase text-xs md:text-lg text-[#8a6b57]">
                OLTEANU
              </div>

            </div>

            {/* FAMILY 2 */}
            <div className="bg-white rounded-[1.5rem] p-4 sm:p-6 md:p-10 shadow-xl border border-[#eaded3] text-center">

              <div className="flex items-center justify-center gap-2 text-sm sm:text-lg md:text-4xl italic leading-relaxed">

                Elena și Constantin

                <span className="opacity-70 text-lg md:text-3xl">
                  🕊️
                </span>

              </div>

              <div className="mt-4 tracking-[0.25em] uppercase text-xs md:text-lg text-[#8a6b57]">
                ONODEA
              </div>

            </div>

          </div>

          {/* NASI */}
          <div className="mt-8 bg-white rounded-[1.5rem] p-6 md:p-10 shadow-xl border border-[#eaded3] text-lg md:text-xl leading-8 md:leading-10">

            Nașii noștri dragi
            <br />

            <span className="italic text-2xl md:text-3xl">
              Lavinia și Dănuț Marian
            </span>

          </div>

        </div>
      </section>

      {/* RSVP */}
      <section className="px-4 sm:px-6 pb-16 md:pb-28">

        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-[#4e382b] text-white">

          <div className="px-4 sm:px-8 py-14 md:py-24 text-center">

            <div className="uppercase tracking-[0.4em] text-xs md:text-sm opacity-70 mb-6">
              RSVP
            </div>

            <h2 className="text-3xl md:text-6xl italic mb-8">
              Vă așteptăm cu drag!
            </h2>

            <p className="max-w-2xl mx-auto text-base md:text-lg leading-8 md:leading-9 opacity-90 mb-12">
              Vă rugăm să ne confirmați prezența până la data de 1 Septembrie 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">

              <a
                href="tel:0785050154"
                className="rounded-[1.5rem] border border-white/20 bg-white/10 px-6 md:px-8 py-6 md:py-8"
              >
                <div className="text-2xl md:text-3xl italic mb-3">
                  Diana
                </div>

                <div className="tracking-[0.2em]">
                  0785 050 154
                </div>
              </a>

              <a
                href="tel:0752146011"
                className="rounded-[1.5rem] border border-white/20 bg-white/10 px-6 md:px-8 py-6 md:py-8"
              >
                <div className="text-2xl md:text-3xl italic mb-3">
                  Ciprian
                </div>

                <div className="tracking-[0.2em]">
                  0752 146 011
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}