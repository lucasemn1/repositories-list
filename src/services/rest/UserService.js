import BaseService from "./BaseService";

class UserService extends BaseService {
  constructor() {
    super("https://api.github.com/users");
  }
}

export default UserService;
