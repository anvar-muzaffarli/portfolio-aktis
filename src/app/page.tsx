export default function HomePage() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-extrabold tracking-tight">Anvar Khalid</div>

          <div className="hidden items-center gap-4 text-sm md:flex">
            <a className="hover:opacity-70" href="#about">Haqqımızda</a>
            <a className="hover:opacity-70" href="#companies">Şirkətlər</a>
            <a className="hover:opacity-70" href="#tech">Tech</a>
            <a className="hover:opacity-70" href="#courses">Kurslar</a>
            <a className="hover:opacity-70" href="#stats">Stat</a>
            <a className="hover:opacity-70" href="#feedbacks">Feedback</a>
            <a className="hover:opacity-70" href="#syllabus">Sillabus</a>
            <a className="hover:opacity-70" href="#faq">FAQ</a>
            <a className="hover:opacity-70" href="#contact">Əlaqə</a>

            <a
              href="/aktis"
              className="rounded-xl border border-black px-3 py-2 font-semibold hover:bg-black hover:text-white"
            >
              AKTIS
            </a>
          </div>

          <a
            href="/aktis"
            className="rounded-xl border border-black px-3 py-2 text-sm font-semibold hover:bg-black hover:text-white md:hidden"
          >
            AKTIS
          </a>
        </div>
      </nav>

      <main className="mx-auto grid max-w-6xl gap-16 px-4 py-10">
        <section id="hero" className="space-y-3">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Portfolio</h1>
          <p className="max-w-2xl text-black/70">
            Burada intro, CTA, qısa təqdimat olacaq.
          </p>
        </section>

        <section id="about" className="space-y-2">
          <h2 className="text-2xl font-bold">Haqqımızda</h2>
          <p className="text-black/70">Mətn sonradan dolacaq.</p>
        </section>

        <section id="companies" className="space-y-2">
          <h2 className="text-2xl font-bold">Çalışdığım şirkətlər</h2>
          <p className="text-black/70">Mətn sonradan dolacaq.</p>
        </section>

        <section id="tech" className="space-y-2">
          <h2 className="text-2xl font-bold">Tech stack</h2>
          <p className="text-black/70">Mətn sonradan dolacaq.</p>
        </section>

        <section id="courses" className="space-y-2">
          <h2 className="text-2xl font-bold">Tədris etdiyim kurslar</h2>
          <p className="text-black/70">Mətn sonradan dolacaq.</p>
        </section>

        <section id="stats" className="space-y-2">
          <h2 className="text-2xl font-bold">Statistika</h2>
          <p className="text-black/70">Məzun sayı, məmnuniyyət, işə düzələnlər və s.</p>
        </section>

        <section id="feedbacks" className="space-y-2">
          <h2 className="text-2xl font-bold">Tələbə feedbackları</h2>
          <p className="text-black/70">Mətn sonradan dolacaq.</p>
        </section>

        <section id="syllabus" className="space-y-2">
          <h2 className="text-2xl font-bold">Sillabuslar</h2>
          <p className="text-black/70">Sillabus siyahısı burada olacaq.</p>
        </section>

        <section id="faq" className="space-y-2">
          <h2 className="text-2xl font-bold">Sual-cavab</h2>
          <p className="text-black/70">FAQ burada olacaq.</p>
        </section>

        <section id="contact" className="space-y-2">
          <h2 className="text-2xl font-bold">Bizimlə əlaqə</h2>
          <p className="text-black/70">Contact form və linklər burada olacaq.</p>
        </section>

        <footer className="border-t pt-6 text-sm text-black/60">
          Footer
        </footer>
      </main>
    </div>
  );
}
