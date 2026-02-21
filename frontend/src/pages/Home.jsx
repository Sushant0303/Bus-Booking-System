import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const swapLocations = () => {
  const temp = source;
  setSource(destination);
  setDestination(temp);
};

  const searchBus = () => {

    if (!source || !destination) {
      alert("Select source and destination");
      return;
    }

    navigate(
      `/search?source=${source}&destination=${destination}`
    );
  };

  return (
    <>
      <Navbar />

      <div className="home-container">

        {/* HERO */}
        <div className="hero-section">

          <h1>Book Bus Tickets Easily</h1>
          <p>Safe, Fast and Reliable Bus Booking Platform</p>

          {/* SEARCH BOX */}
        <div className="search-box">

  <input
    type="text"
    placeholder="Enter Source"
    value={source}
    onChange={(e) => setSource(e.target.value)}
  />

  {/* SWAP BUTTON */}
  <button
    className="swap-btn"
    onClick={swapLocations}
  >
    ⇄
  </button>

  <input
    type="text"
    placeholder="Enter Destination"
    value={destination}
    onChange={(e) => setDestination(e.target.value)}
  />

  <button onClick={searchBus}>
    Search Buses
  </button>

</div>

        </div>

        {/* FEATURES */}
        <div className="features">

          <div className="feature-card">
            <h3>🚌 Easy Booking</h3>
            <p>Select seats and book instantly.</p>
          </div>

          <div className="feature-card">
            <h3>💺 Live Seat Layout</h3>
            <p>Choose seats visually.</p>
          </div>

          <div className="feature-card">
            <h3>🎟 My Tickets</h3>
            <p>Manage bookings anytime.</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;