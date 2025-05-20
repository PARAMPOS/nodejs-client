import { SakliKartSilme } from "../src/index.js";
import { config } from "../src/configs/index.js";

config.URL = "https://testposws.param.com.tr/out.ws/service_ks.asmx?WSDL";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await SakliKartSilme({
  KS_GUID: "7647f35d-7f37-4f83-bdc6-37c1e18fcd96",
  KK_Islem_ID: "1014",
});

console.log("sakli_kart_silme", response);