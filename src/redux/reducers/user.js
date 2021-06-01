import { INIT_USER } from "../constants/user";

export default function user(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case INIT_USER:
      state = payload;
      break;

    default:
      break;
  }

  return state;
}
