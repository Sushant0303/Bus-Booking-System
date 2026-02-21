import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "./AddBus.css";

function AddBus() {

  const [busName, setBusName] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [price, setPrice] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const addBus = async () => {
    try {

      await API.post("/bus/add", {
        busName,
        busNumber,
        source,
        destination,
        departureTime,
        arrivalTime,
        price: Number(price),
        totalSeats: Number(totalSeats)
      });

      alert("Bus Added Successfully");

      // reset fields
      setBusName("");
      setBusNumber("");
      setSource("");
      setDestination("");
      setDepartureTime("");
      setArrivalTime("");
      setPrice("");
      setTotalSeats("");

    } catch (err) {
      console.log(err);
      alert("Failed to add bus");
    }
  };

  return (
    <>
  <Navbar />

  <div className="addbus-page">

    <div className="addbus-card">

      <h2 className="addbus-title">Add Bus (Admin)</h2>

      <input
        className="addbus-input"
        placeholder="Bus Name"
        value={busName}
        onChange={(e) => setBusName(e.target.value)}
      />

      <input
        className="addbus-input"
        placeholder="Bus Number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
      />

      <input
        className="addbus-input"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        className="addbus-input"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label className="addbus-label">Departure Time</label>
      <input
        className="addbus-input"
        type="time"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
      />

      <label className="addbus-label">Arrival Time</label>
      <input
        className="addbus-input"
        type="time"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
      />

      <input
        className="addbus-input"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="addbus-input"
        placeholder="Total Seats"
        type="number"
        value={totalSeats}
        onChange={(e) => setTotalSeats(e.target.value)}
      />

      <button className="addbus-btn" onClick={addBus}>
        Add Bus
      </button>

    </div>

  </div>
</>
  );
}

export default AddBus;