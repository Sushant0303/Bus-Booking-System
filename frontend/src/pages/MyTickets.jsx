import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function MyTickets() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please login first");
      return;
    }

    try {
      const res = await API.get(
        `/booking/my-bookings/${userId}`
      );

      setBookings(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to load bookings");
    }
  };

  const cancelBooking = async (bookingId) => {
    try {

      await API.delete(`/booking/cancel/${bookingId}`);

      alert("Booking Cancelled");

      fetchBookings();

    } catch (err) {
      alert("Cancel Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>My Tickets</h2>

        {bookings.length === 0 && (
          <p>No bookings found</p>
        )}

        {bookings.map((b) => (

          <div
            key={b.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px"
            }}
          >
            <h3>{b.bus.busName}</h3>

            <p>
              {b.bus.source} → {b.bus.destination}
            </p>

            <p>
              Seat: {b.seat.seatNumber}
            </p>

            <p>
              Booking Time: {b.bookingTime}
            </p>

            <button
              onClick={() => cancelBooking(b.id)}
              style={{
                marginTop: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px"
              }}
            >
              Cancel Booking
            </button>
          </div>

        ))}
      </div>
    </>
  );
}

export default MyTickets;