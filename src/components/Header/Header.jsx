import "./Header.css";

/**
 * Header
 * Top bar of the page. Used once in App.
 * Desktop: page title on the left, search, notifications and the user's name on the right.
 * Mobile: the logo and a menu button instead (the CSS hides/shows the right parts).
 *
 * Props:
 * - userName (string) - name shown on the right
 * - onMenuClick (function) - called when the mobile menu button is clicked
 */
function Header({ userName, onMenuClick }) {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <p className="logo header-logo">UMG</p>

      <div className="header-right">
        {/* search and notifications don't do anything yet, there's no design for them */}
        <button className="header-icon">🔍</button>
        <button className="header-icon">🔔</button>
        <div className="header-user">
          <span className="thumb header-avatar"></span>
          {userName}
        </div>
        <button className="header-menu" onClick={onMenuClick}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
