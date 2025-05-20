import { KartSaklamaOdeme } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/out.ws/service_ks.asmx?WSDL";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await KartSaklamaOdeme({
  KS_GUID: "ac33d02b-aaff-4220-ad28-808f316d2c7b",
  CVV: "001",
  KK_Sahibi_GSM: "5551231212",
  Hata_URL: "http://localhost:62361/turkpos.api/Sonuc.aspx",
  Basarili_URL: "http://localhost:62361/turkpos.api/Sonuc.aspx",
  Siparis_ID: "siparis1",
  Siparis_Aciklama: "string", 
  Taksit: "1",
  Islem_Tutar: "100,00",
  Toplam_Tutar: "100,00",
  Islem_Guvenlik_Tip: "3D",
  Islem_ID: "string", 
  IPAdr: "127.0.0.1",
  Ref_URL: "string", 
  Data1: "string", 
  Data2: "string", 
  Data3: "string", 
  Data4: "string", 
  KK_Islem_ID: "test1",
});

console.log("kart_saklama_odeme", response);

