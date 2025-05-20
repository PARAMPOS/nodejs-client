import { ThreeDSTamamla } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const threeds = await ThreeDSTamamla({
  UCD_MD: "454671:7275A43100ED65310D4E6A104EA544754A90C54985326756787D0CE39E16BDAD2BA04048D6F6C02BFD8F213843EA14F7:5445:", 
  Islem_GUID: "a2b14712-463b-4700-a62b-e14a38efb533",
  Siparis_ID: "Test1-1",
});

console.log("threeds", threeds);

