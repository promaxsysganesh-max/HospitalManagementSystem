export default function AppointmentTable() {
  const data = [
    { token: "A-101", name: "Ganesh B", doctor: "Dr. Patil", time: "09:00", dept: "Cardiology", status: "Checked In" },
    { token: "A-102", name: "Abhay P", doctor: "Dr. Sawant", time: "09:30", dept: "General", status: "Waiting" },
  ];

  return (
    <div className="card">
      <h3>Today's Appointments</h3>
      <table>
        <thead>
          <tr>
            <th>Token</th><th>Patient</th><th>Doctor</th><th>Time</th><th>Dept</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.token}</td>
              <td>{d.name}</td>
              <td>{d.doctor}</td>
              <td>{d.time}</td>
              <td>{d.dept}</td>
              <td>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}