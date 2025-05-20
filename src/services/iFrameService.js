import soap from "soap";
import { config } from "../configs/index.js";
import { iFrameModel } from "../types/models/iFrameModel.js";

class iFrameService {
  constructor() {
    this.client = null;
  }

  async createClient() {
    if (!this.client) {
      this.client = await soap.createClientAsync(config.URL);
    }
    return this.client;
  }

  async TP_Modal_Payment(req) {
    const { error } = iFrameModel(req.d);
    if (error) {
      return error.details;
    }
    req.d.Code = config.CLIENT_CODE;
    req.d.User = config.CLIENT_USERNAME;
    req.d.Pass = config.CLIENT_PASSWORD;
    req.d.GUID = config.GUID;
    const client = await this.createClient();
    const result = await client.TP_Modal_PaymentAsync(req);
    return result[0];
  }
}

export default new iFrameService();
