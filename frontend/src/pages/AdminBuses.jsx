import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./AdminBuses.css";

function AdminBuses() {

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ====================================
  // FETCH ALL BUSES
  // ====================================
  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      setLoading(true);

      const res = await API.get("/bus/all");
      setBuses(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to load buses");
    } finally {
      setLoading(false);
    }
  };

  // ====================================
  // DELETE BUS
  // ====================================
  const deleteBus = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this bus?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/bus/delete/${id}`);

      alert("Bus Deleted Successfully");

      // refresh list
      fetchBuses();

    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  // ====================================
  // UI
  // ====================================
  return (
    <>
      <Navbar />

      <div className="admin-page">

        <h2 className="admin-title">All Buses (Admin)</h2>

        {loading && <p>Loading buses...</p>}

        {!loading && buses.length === 0 && (
          <p>No buses available</p>
        )}

        {!loading && buses.map((bus) => (

          <div key={bus.id} className="admin-bus-card">

            <h3>{bus.busName}</h3>

            <p><b>Bus No:</b> {bus.busNumber}</p>

            <p>
              {bus.source} → {bus.destination}
            </p>

            <p>
              Departure: {bus.departureTime}
            </p>

            <p>
              Arrival: {bus.arrivalTime}
            </p>

            <p>
              Price: ₹ {bus.price}
            </p>

            <p>
              Seats: {bus.totalSeats}
            </p>

            {/* DELETE BUTTON */}
            <button
              className="delete-btn"
              onClick={() => deleteBus(bus.id)}
            >
              Delete Bus
            </button>

          </div>

        ))}

      </div>
    </>
  );
}

export default AdminBuses;