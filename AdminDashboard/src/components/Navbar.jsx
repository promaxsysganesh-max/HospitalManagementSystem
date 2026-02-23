export default function Navbar({ setCollapsed }) {
  return (
    <div className="navbar">
      <button className="hamburger" onClick={() => setCollapsed(c => !c)}>
        ☰
      </button>

      <div className="logo">
        <strong>Promaxsys Health</strong>
        <span>System Administrator Portal</span>
      </div>

      <div className="profile">
        <span className="bell">🔔</span>
        <div className="avatar">A</div>
        <div>
          <strong>Admin User</strong>
          <p>System Administrator</p>
        </div>
      </div>
    </div>
  );
}