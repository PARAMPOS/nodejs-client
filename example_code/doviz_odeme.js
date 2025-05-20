import { DovizOdeme } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await DovizOdeme({
  Doviz_Kodu: "1001",
  KK_Sahibi: "test",
  KK_No: "4546711234567894",
  KK_SK_Ay: "12",
  KK_SK_Yil: "2026",
  KK_CVC: "000",
  KK_Sahibi_GSM: "5551231212",
  Hata_URL: "https://dev.param.com.tr/tr",
  Basarili_URL: "https://dev.param.com.tr/tr",
  Siparis_ID: "siparis3",
  Siparis_Aciklama: "string",
  Islem_Tutar: "100,00",
  Toplam_Tutar: "100,00",
  Islem_Guvenlik_Tip: "3D",
  Islem_ID: "125",
  IPAdr: "127.0.0.1",
  Ref_URL: "string",
  Data1: "string",
  Data2: "string",
  Data3: "string",
  Data4: "string",
  Data5: "string",
});

console.log("doviz_odeme", response);