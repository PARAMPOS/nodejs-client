import { iFrame } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "test";
config.CLIENT_PASSWORD = "test";
config.GUID = "0C13D406-873B-403B-9C09-A5766840D98C";

const response = await iFrame({
  d: {
    GSM: "",
    Amount: "100,50",
    Order_ID: "Iframe002221355",
    TransactionId: "NodeJs1",
    Callback_URL: "https://webhook.site/606c70fc-18c7-4adc-a523-ce4d7f732365",
    Installment: "1",
    MaxInstallment: "12",
  },
});

console.log("iFrameResponse", response);
