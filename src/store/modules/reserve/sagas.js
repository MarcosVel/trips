import { all, call, put, select, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { addReserveSuccess, updateAmountSuccess } from "./action";

function* addToReserve({ id }) {
  const tripExist = yield select(state =>
    state.reserve.find(trip => trip.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  const stockReserved = tripExist ? tripExist.amount : 0;

  const amount = stockReserved + 1;

  if (amount > stockAmount) {
    alert("Estoque de viagem esgotado");
    return;
  }

  if (tripExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addReserveSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    alert("Estoque de viagem esgotado");
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest("ADD_RESERVE_REQUEST", addToReserve),
  takeLatest("UPDATE_AMOUNT_REQUEST", updateAmount),
]);
