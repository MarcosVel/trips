import { select, call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { addReserveSuccess, updateAmountReserve } from "./action";

function* addToReserve({ id }) {
  const tripExist = yield select(state =>
    state.reserve.find(trip => trip.id === id)
  );

  if (tripExist) {
    const amount = tripExist.amount + 1;

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
