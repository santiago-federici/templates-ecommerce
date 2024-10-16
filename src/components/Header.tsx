export function Header() {
  return (
    <header className="flex justify-between items-center h-20 wrapper">
      <div className="bg-neutral-500 rounded-sm w-40 h-8"></div>

      <nav className="flex gap-10 items-center">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Template</li>
          <li>Docs</li>
          <li>About</li>
        </ul>
        <span className="h-6 w-px bg-gray-300"></span>
        <div className="flex gap-4">
          <button>Sign In</button>
          <button className="rounded-md bg-black text-white px-4 py-2 font-medium hover:opacity-80 duration-200">
            Get full access
          </button>
        </div>
      </nav>
    </header>
  );
}
