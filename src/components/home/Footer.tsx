export default function Footer() {
    return (
      <footer className="border-t pb-10 pt-6 text-sm text-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Anvar Khalid</div>
          <div className="flex gap-4">
            <a className="hover:opacity-70" href="#hero">Yuxarı</a>
            <a className="hover:opacity-70" href="#contact">Əlaqə</a>
            <a className="hover:opacity-70" href="/aktis">AKTIS</a>
          </div>
        </div>
      </footer>
    );
  }
  