export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* Header */}
      <div className="sidebar-header">
        <button 
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>

        {!collapsed && <h3 className="brand">Promaxsys</h3>}
      </div>

      {/* Menu */}
      <ul className="menu">
        <li className="active">Dashboard</li>
        <li>Patient Registration</li>
        <li>Appointment Scheduling</li>
        <li>Bed Management</li>
        <li>Patient Information</li>
        <li>Token Queue</li>
      </ul>

    </div>
  );
}