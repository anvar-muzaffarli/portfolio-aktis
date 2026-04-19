export default function Loading() {
    return (
      <div className="fixed inset-0 z-9999 grid place-items-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <StarSpinner />
          <div className="text-sm font-semibold tracking-tight text-black/70">Loading…</div>
        </div>
      </div>
    );
  }
  
  function StarSpinner() {
    return (
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
          <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,0,0,0.10)" strokeWidth="2" />
          <path d="M50 12 L84 72 H16 Z" fill="none" stroke="rgba(0,0,0,0.75)" strokeWidth="3" strokeLinejoin="round" />
          <path d="M50 88 L16 28 H84 Z" fill="none" stroke="rgba(0,0,0,0.75)" strokeWidth="3" strokeLinejoin="round" />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-3 w-3 animate-pulse rounded-full bg-black/80" />
        </div>
      </div>
    );
  }
  