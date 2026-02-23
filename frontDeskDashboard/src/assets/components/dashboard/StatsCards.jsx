export default function StatsCards() {
  const stats = [
    { title: "Today's Appointments", value: 28 },
    { title: "New Registrations", value: 12 },
    { title: "Available Beds", value: 18 },
    { title: "Queue Count", value: 15 },
  ];

  return (
    <div className="stats-grid">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <h4>{s.title}</h4>
          <h1>{s.value}</h1>
        </div>
      ))}
    </div>
  );
}