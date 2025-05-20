import { IslemOzet } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await IslemOzet({
  Tarih_Bas: "20.11.2024 00:00:00",
  Tarih_Bit: "20.11.2024 15:15:00",
});

console.log("islem_ozet", response);