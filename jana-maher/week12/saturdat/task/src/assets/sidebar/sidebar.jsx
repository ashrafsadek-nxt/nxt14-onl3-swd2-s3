import "./sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="sidebar-title">BSide</h2>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
        <li>Notifications</li>
        <li>Help</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
