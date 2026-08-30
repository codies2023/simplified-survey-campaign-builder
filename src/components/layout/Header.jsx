export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">S</span>
        <div>
          <strong>Survey Campaign Builder</strong>
          <small>Build interactive campaigns in real time</small>
        </div>
      </div>
     <div className="flex items-center gap-2 rounded-full border border-indigo-200 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>⚡ Live Builder Mode</div>
    </header>
  );
}
