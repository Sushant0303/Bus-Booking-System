import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchBus from "./pages/SearchBus";
import SeatLayout from "./pages/SeatLayout";
import MyTickets from "./pages/MyTickets";
import Register from "./pages/Register";
import AddBus from "./pages/AddBus";
import AdminBuses from "./pages/AdminBuses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchBus />} />
        <Route path="/seats/:id" element={<SeatLayout />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/add-bus" element={<AddBus />} />
        <Route path="/admin/buses" element={<AdminBuses />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;