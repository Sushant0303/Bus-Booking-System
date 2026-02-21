import "./SearchBus.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function SearchBus() {

  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // ====================================
  // READ URL PARAMETERS
  // ====================================
  useEffect(() => {

    const params = new URLSearchParams(location.search);

    const source = params.get("source");
    const destination = params.get("destination");

    if (source && destination) {
      fetchBuses(source, destination);
    }

  }, [location.search]);

  // ====================================
  // FETCH BUSES
  // ====================================
  const fetchBuses = async (source, destination) => {

    try {

      const res = await API.get(
        `/bus/search?source=${source}&destination=${destination}`
      );

      setBuses(res.data);

    } catch (err) {
      console.log(err);
      alert("Failed to load buses");
    }finally {
    setLoading(false);}
  };

  // ====================================
  // UI
  // ====================================
  return (
//     <>
//       <Navbar />

//       <div style={{ padding: "20px" }}>

//         {loading && (
//   <div className="loader">Loading buses...</div>
// )}

//         <h2>Available Buses</h2>

//         {buses.length === 0 && (
//           <p>No buses found</p>
//         )}

//         {buses.map((bus) => (

//           <div
//             key={bus.id}
//             style={{
//               border: "1px solid #ddd",
//               padding: "15px",
//               marginTop: "10px",
//               borderRadius: "10px"
//             }}
//           >
//             <h3>{bus.busName}</h3>

//             <p>
//               {bus.source} → {bus.destination}
//             </p>

//             <p>Price: ₹ {bus.price}</p>

//            <button
//   onClick={() =>
//     navigate(`/seats/${bus.id}`)
//   }
//   style={{
//     padding: "8px 12px",
//     background: "#d84e55",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer"
//   }}
// >
//   View Seats
// </button>
//           </div>

//         ))}

//       </div>
//     </>



<>
  <Navbar />

  <div className="search-page">

    <h2>Available Buses</h2>

    {loading && (
      <div className="loader">Loading buses...</div>
    )}

    {buses.length === 0 && !loading && (
      <p>No buses found</p>
    )}

    {buses.map((bus) => (

      <div key={bus.id} className="bus-card">

        {/* LEFT */}
        <div className="bus-left">
          <h3>{bus.busName}</h3>

          <div className="route">
            {bus.source} → {bus.destination}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bus-right">

          <div className="price">
            ₹ {bus.price}
          </div>

          <button
            className="view-btn"
            onClick={() =>
              navigate(`/seats/${bus.id}`)
            }
          >
            View Seats
          </button>

        </div>

      </div>

    ))}

  </div>
</>
  );
}

export default SearchBus;