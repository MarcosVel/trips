import { select, call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { addReserveSuccess, updateAmountReserve } from "./action";

function* addToReserve({ id }) {
  const tripExist = yield select(state =>
    state.reserve.find(trip => trip.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  const stockReserved = tripExist ? tripExist.amount : 0;

  const amount = stockReserved + 1;

  if(amount > stockAmount) {
    alert('Estoque de viagem esgotado')
    return;
  }

  if (tripExist) {
    yield put(updateAmountReserve(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addReserveSuccess(data));
  }
}

export default all([takeLatest("ADD_RESERVE_REQUEST", addToReserve)]);
