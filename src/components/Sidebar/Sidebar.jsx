import "./Sidebar.css";

/**
 * Sidebar
 * Left menu with the logo and the navigation links.
 * Used once in App. Hidden on mobile unless the menu button is clicked.
 *
 * Props:
 * - links (array) - navigation items from the data: { id, label, href }
 * - isOpen (boolean) - on mobile, whether the menu is showing
 */
function Sidebar({ links, isOpen }) {
  return (
    <aside className={isOpen ? "sidebar sidebar-open" : "sidebar"}>
      <p className="logo sidebar-logo">UMG</p>
      <p className="sidebar-label">Navigation</p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {/* Dashboard is the only page, so it's always the active one */}
            <a
              href={link.href}
              className={link.id === "dashboard" ? "sidebar-link active" : "sidebar-link"}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
