import "./nav.css";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <h1 className="logo">My Website</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
