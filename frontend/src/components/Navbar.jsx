import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const logout = () => {
    // remove ALL login info
    localStorage.removeItem("userId");
    localStorage.removeItem("email");

    // go to HOME page
    navigate("/");
  };

 
 

  return (
    <nav
      style={{
        background: "#d84e55",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2
        style={{ margin: 0, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        🚌 BusBooking
      </h2>

      <button
  onClick={() => navigate("/my-tickets")}
  style={{
    marginRight: "10px",
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  My Tickets
</button>

 {email === "admin@gmail.com" && (
  <button onClick={() => navigate("/admin/add-bus")}>
    Add Bus
  </button>
)}

{email === "admin@gmail.com" && (
  <button onClick={() => navigate("/admin/buses")}>
    View Buses
  </button>
)}

      <div>

        {/* SHOW ONLY WHEN LOGGED IN */}
        {email ? (
          <>
            <span style={{ marginRight: "15px" }}>
              👤 {email}
            </span>

            <button
              onClick={logout}
              style={{
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;