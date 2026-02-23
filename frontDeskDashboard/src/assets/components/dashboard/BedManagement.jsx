export default function BedManagement() {
  const beds = [
    { id: "GW-101", status: "Available" },
    { id: "GW-102", status: "Occupied", name: "John Smith" },
    { id: "GW-103", status: "Reserved", name: "Sarah Johnson" },
    { id: "GW-104", status: "Available" },
  ];

  return (
    <div className="card">
      <h3>Bed Management & Allocation</h3>

      <div className="bed-grid">
        {beds.map((b, i) => (
          <div key={i} className={`bed ${b.status.toLowerCase()}`}>
            <h4>{b.id}</h4>
            <p>{b.status}</p>
            {b.name && <span>{b.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}