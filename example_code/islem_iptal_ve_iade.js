import { IslemIptalVeIade } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await IslemIptalVeIade({
  Durum: "IPTAL", // IPTAL veya IADE
  Siparis_ID: "3000159380",
  Tutar: "1.00",
});

console.log("islem_iptal_ve_iade", response);