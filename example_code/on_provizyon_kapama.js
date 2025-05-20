import { OnProvizyonKapama } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await OnProvizyonKapama({
  Prov_ID: "",
  Prov_Tutar: "10,00",
  Siparis_ID: "Node4",
});

console.log("on_provizyon_kapama", response);
