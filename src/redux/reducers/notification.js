import { NOTIFICATE, REMOVE_NOTIFICATION } from "../constants/notification";

export default function notification(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case NOTIFICATE:
      state = [...state, { id: Date.now(), ...payload }];
      break;

    case REMOVE_NOTIFICATION:
      state = state.filter((item) => item.id !== payload.id);
      break;

    default:
      break;
  }

  return state;
}
