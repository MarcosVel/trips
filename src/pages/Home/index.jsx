import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { MdFlightTakeoff } from "react-icons/md";
import "./style.css";

function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
    }

    loadApi();
  }, []);

  return (
    <div>
      <div className="box">
        {trips.map(trips => (
          <li key={trips.id}>
            <img src={trips.image} alt={trips.title} />
            <strong>{trips.title}</strong>
            <span>Status: {trips.status ? "Disponível" : "Indisponível"}</span>

            <button onClick={() => {}}>
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
