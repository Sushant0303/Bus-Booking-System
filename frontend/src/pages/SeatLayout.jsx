import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./SeatLayout.css";

function SeatLayout() {

  const { id } = useParams(); // busId
  const navigate = useNavigate();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [busPrice, setBusPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  // ====================================
  // FETCH SEATS + BUS PRICE
  // ====================================
  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    try {

      // fetch seat layout
      const res = await API.get(`/seat/layout/${id}`);
      setSeats(res.data);

      // fetch bus price
      const busRes = await API.get("/bus/all");
      const bus = busRes.data.find(
        (b) => b.id === Number(id)
      );

      if (bus) {
        setBusPrice(bus.price);
      }

    } catch (err) {
      console.log(err);
      alert("Failed to load seats");
    } finally {
    setLoading(false);}
  };

  // ====================================
  // SELECT / UNSELECT SEAT
  // ====================================
  const selectSeat = (seat) => {

    if (seat.status === "BOOKED") return;

    const alreadySelected = selectedSeats.find(
      (s) => s.id === seat.id
    );

    if (alreadySelected) {
      setSelectedSeats(
        selectedSeats.filter((s) => s.id !== seat.id)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // ====================================
  // TOTAL PRICE
  // ====================================
  const totalPrice = selectedSeats.length * busPrice;

  // ====================================
  // BOOK SEATS
  // ====================================
  const bookSeats = async () => {

    if (selectedSeats.length === 0) {
      alert("Please select seats first");
      return;
    }

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {

      const seatIds = selectedSeats.map(s => s.id);

      await API.post("/booking/book-multiple", {
        userId: Number(userId),
        busId: Number(id),
        seatIds: seatIds
      });

     setShowTicket(true);
      setSelectedSeats([]);
      fetchSeats();

    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Booking Failed");
    }
  };

  // ====================================
  // UI
  // ====================================
  return (
    <>
     <>
  <Navbar />

  <div className="seat-page">

    <h2 className="seat-title">Seat Layout</h2>

    <div className="driver">🚍 Driver</div>

    {loading && (
  <div className="loader">Loading seats...</div>
)}

    {/* Seat Grid */}
    <div className="seat-grid">

      {seats.map((seat, index) => (

        <>
          {/* aisle gap after 2 seats */}
          {index % 4 === 2 && <div className="aisle"></div>}

          <button
            key={seat.id}
            onClick={() => selectSeat(seat)}
            className={`seat-btn ${
              seat.status === "BOOKED"
                ? "booked"
                : selectedSeats.find(s => s.id === seat.id)
                ? "selected"
                : "available"
            }`}
          >
            {seat.seatNumber}
          </button>
        </>
      ))}

    </div>

    {/* Legend */}
    <div className="legend">

      <div className="legend-item">
        <div className="legend-box available"></div>
        Available
      </div>

      <div className="legend-item">
        <div className="legend-box selected"></div>
        Selected
      </div>

      <div className="legend-item">
        <div className="legend-box booked"></div>
        Booked
      </div>

    </div>

    {/* Selected Seats */}
    {selectedSeats.length > 0 && (
      <>
        <h3 style={{ marginTop: "20px" }}>
          Seats: {selectedSeats.map(s => s.seatNumber).join(", ")}
        </h3>

        <p>Price per seat: ₹ {busPrice}</p>
        <h3>Total: ₹ {totalPrice}</h3>
      </>
    )}

    <button
      onClick={bookSeats}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#d84e55",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Book Now
    </button>

    {showTicket && (
  <div className="ticket-overlay">

    <div className="ticket-popup">

      <h2>🎟 Booking Confirmed</h2>

      <p>
        Seats: {selectedSeats.map(s => s.seatNumber).join(", ")}
      </p>

      <p>Price per seat: ₹ {busPrice}</p>
      <h3>Total Paid: ₹ {totalPrice}</h3>

      <button
        onClick={() => setShowTicket(false)}
        className="close-ticket-btn"
      >
        Close
      </button>

    </div>

  </div>
)}

  </div>
</>
    </>
  );
}

export default SeatLayout;