import React, { useEffect, useState } from "react";
import api from "../../services/api";

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
    <div>Home</div>
  );
}

export default Home;
