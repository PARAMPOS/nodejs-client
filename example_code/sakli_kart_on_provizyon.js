import { SakliKartOnProvizyon } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await SakliKartOnProvizyon({
  KK_GUID: "29a768aa-c8ab-4868-ba34-de172fe5274a",
  KS_Kart_No: "0c13d406-873b-403b-9c09-a5766840d98c",
  KK_Sahibi_GSM: "5551234567",
  Hata_URL: "www.ornek.com.tr",
  Basarili_URL: "www.ornek.com.tr",
  Siparis_ID: "147963",
  Siparis_Aciklama: "string",
  Islem_Tutar: "100,00",
  Toplam_Tutar: "100,00",
  Islem_Hash: "VIwkKAhPVr0r05Ze1zgCLGc0AV0",
  Islem_Guvenlik_Tip: "3D",
  Islem_ID: "sipariş11",
  IPAdr: "127.0.0.1",
  Ref_URL: "string",
  Data1: "",
  Data2: "",
  Data3: "",
  Data4: "",
  Data5: "",
});

console.log("sakli_kart_on_provizyon", response);
