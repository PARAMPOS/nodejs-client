import { KartSaklama } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/out.ws/service_ks.asmx?WSDL";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await KartSaklama({
  KK_Sahibi: "John Doe",
  KK_No: "5200190006338608",
  KK_SK_Ay: "01",
  KK_SK_Yil: "30",
  KK_Kart_Adi: "Testt",
  KK_Islem_ID: "", 
});

console.log(response);

