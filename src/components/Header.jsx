import LogoDarkTheme from "../assets/logoDarkTheme.png";
import LogoLightTheme from "../assets/logoLightTheme.png";
import "./Header.css";

function Header({ theme, onToggleTheme }) {
  const nextTheme = theme === "light" ? "dark" : "light";

   const logoTheme = () => {
    return theme === "light" ? LogoLightTheme : LogoDarkTheme;
  };

  return (
    <header className="app-header">
      <img src={logoTheme()} alt="K-pop moodboard logo" className="logoTheme" />
      {/* <img src={Logo} alt="K-pop moodboard logo" className="logo" /> */}
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
