import { KartDogrulama } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await KartDogrulama({
  KK_No: "4546711234567894",
  KK_SK_Ay: "12",
  KK_SK_Yil: "2026",
  KK_CVC: "000",
  Return_URL: "",
  Data1: "",
  Data2: "",
  Data3: "",
  Data4: "",
  Data5: "",
});

console.log("kart_dogrulama", response);

