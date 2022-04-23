import React from "react";
import { MdAddCircle, MdDelete, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeReserve,
  updateAmountReserve,
} from "../../store/modules/reserve/action";
import "./style.css";

function Reservas() {
  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeReserve(id));
  };

  const decrementAmount = reserve => {
    dispatch(updateAmountReserve(reserve.id, reserve.amount - 1));
  };

  const incrementAmount = reserve => {
    dispatch(updateAmountReserve(reserve.id, reserve.amount + 1));
  };

  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} reserva(s)</h1>

      {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button onClick={() => decrementAmount(reserve)} className={reserve.amount < 2 && "minimum"}>
              <MdRemoveCircle size={22} />
            </button>
            <span>Pessoas:</span>
            <input type="number" readOnly value={reserve.amount} />
            <button onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={22} />
            </button>
          </div>
          <button onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button>Solicitar reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;
