import { INIT_USER } from "../constants/user";

export function initUser(data) {
  return {
    type: INIT_USER,
    payload: data,
  };
}
