import React from "react";
import "./style.css";
import { MdDelete } from "react-icons/md";

function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reserva</h1>
      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="blahs"
        />
        <strong>Viagem</strong>
        <span>Quantidade: 2</span>
        <button onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button>Solicitar reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;
