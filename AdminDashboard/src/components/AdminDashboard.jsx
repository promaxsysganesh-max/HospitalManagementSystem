import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-container">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`main-content ${collapsed ? "collapsed" : ""}`}>
        <Navbar setCollapsed={setCollapsed} />

        <div className="page-content">
          <h1>System Administration</h1>
          <p className="subtitle">
            Complete hospital management system overview
          </p>

          <div className="stats-grid">
            <Card title="Total Staff" value="127" growth="+3 this month" />
            <Card title="Active Patients" value="1,245" growth="+18% growth" />
            <Card title="Monthly Revenue" value="$71,000" growth="+12% from last month" />
            <Card title="System Uptime" value="99.9%" />
          </div>

          <div className="grid-2">
            <Panel title="Hospital Performance Overview">
              <div className="chart-placeholder">Line Chart</div>
            </Panel>

            <Panel title="Department Performance">
              <div className="chart-placeholder">Bar Chart</div>
            </Panel>
          </div>

          <div className="grid-2">
            <Panel title="Recent System Activities">
              <Activity name="Dr. Wilson" text="Updated patient EMR" time="5 min ago" />
              <Activity name="Sarah Martinez" text="Registered new patient" time="12 min ago" />
              <Activity name="Emily Rodriguez" text="Dispensed medication" time="18 min ago" />
              <Activity name="David Thompson" text="Generated financial report" time="25 min ago" />
            </Panel>

            <Panel title="Quick Actions">
              <div className="quick-grid">
                <QuickBtn text="Manage Users" />
                <QuickBtn text="Departments" />
                <QuickBtn text="Reports" />
                <QuickBtn text="Settings" />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Components */

const Card = ({ title, value, growth }) => (
  <div className="card">
    <h4>{title}</h4>
    <h2>{value}</h2>
    {growth && <span className="growth">{growth}</span>}
  </div>
);

const Panel = ({ title, children }) => (
  <div className="panel">
    <h3>{title}</h3>
    {children}
  </div>
);

const Activity = ({ name, text, time }) => (
  <div className="activity">
    <div>
      <strong>{name}</strong>
      <p>{text}</p>
    </div>
    <span>{time}</span>
  </div>
);

const QuickBtn = ({ text }) => (
  <button className="quick-btn">{text}</button>
);