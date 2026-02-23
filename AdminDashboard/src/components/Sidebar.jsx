export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <ul>
        <li className="active">Dashboard</li>
        <li>User Management</li>
        <li>Departments</li>
        <li>Security</li>
        <li>System Settings</li>
      </ul>

      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        <span>‹</span> Collapse
      </button>
    </div>
  );
}