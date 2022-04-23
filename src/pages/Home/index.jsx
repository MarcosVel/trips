import React, { useEffect, useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { addReserve } from "../../store/modules/reserve/action";
import "./style.css";

function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(trip) {
    dispatch(addReserve(trip));
  }

  return (
    <div>
      <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>

            <button onClick={() => handleAdd(trip)}>
              <MdFlightTakeoff size={16} color="#fff" />
              <span>Solicitar reserva</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Home;
