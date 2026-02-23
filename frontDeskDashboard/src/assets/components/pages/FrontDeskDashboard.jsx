import DashboardLayout from "../layout/DashboardLayout";

export default function FrontDeskDashboard() {
  return (
    <DashboardLayout>
      <h2 className="page-title">Front Desk Dashboard</h2>
      <p className="page-subtitle">
        Manage patient registration, appointments, bed allocation and queue
      </p>

      <div className="stats-grid">
        <div className="stat-card blue">
          <p>Today's Appointments</p>
          <h1>28</h1>
        </div>
        <div className="stat-card green">
          <p>New Registrations</p>
          <h1>12</h1>
        </div>
        <div className="stat-card orange">
          <p>Available Beds</p>
          <h1>18</h1>
        </div>
        <div className="stat-card purple">
          <p>Queue Count</p>
          <h1>15</h1>
        </div>
      </div>

      <div className="content-grid">
        <div className="card large">
          <h3>Today's Appointments</h3>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Dept</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A-101</td>
                <td>Ganesh B</td>
                <td>Dr Patil</td>
                <td>09:00</td>
                <td>Cardiology</td>
                <td className="status success">Checked In</td>
              </tr>
              <tr>
                <td>A-102</td>
                <td>Abhay P</td>
                <td>Dr Sawant</td>
                <td>09:30</td>
                <td>General</td>
                <td className="status pending">Waiting</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Bed Management</h3>
          <div className="bed-grid">
            <div className="bed available">GW-101</div>
            <div className="bed occupied">GW-102</div>
            <div className="bed reserved">GW-103</div>
            <div className="bed available">GW-104</div>
            <div className="bed available">GW-105</div>
            <div className="bed occupied">GW-106</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}