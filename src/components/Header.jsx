function Header({ theme, onToggleTheme }) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">your cozy k-pop space</p>
      </div>

      <button type="button" className="theme-toggle" onClick={onToggleTheme}>
        Switch to {nextTheme} mode
      </button>
    </header>
  );
}

export default Header;
