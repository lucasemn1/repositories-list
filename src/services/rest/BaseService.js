import axios from "axios";

class BaseService {
  connection;

  constructor(baseURL = "") {
    this.connection = axios.create({ baseURL });
  }

  async getAll(endpoint) {
    try {
      const response = await this.connection.get(endpoint);

      return {
        data: response.data,
        response,
      };
    } catch (err) {
      throw new Error({
        data: null,
        response: err.response,
      });
    }
  }
}

export default BaseService;
