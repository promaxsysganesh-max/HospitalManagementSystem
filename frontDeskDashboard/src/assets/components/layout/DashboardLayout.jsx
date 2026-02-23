import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        className={`main-content ${collapsed ? "collapsed" : ""}`}
      >
        <Navbar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}