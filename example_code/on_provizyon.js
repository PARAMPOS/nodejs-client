import { OnProvizyon } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await OnProvizyon({
  KK_Sahibi: "John Doe",
  KK_No: "5571135571135575",
  KK_SK_Ay: "12",
  KK_SK_Yil: "26",
  KK_CVC: "000",
  KK_Sahibi_GSM: "5462970111", 
  Hata_URL: "https://dev.param.com.tr/en",
  Basarili_URL: "https://dev.param.com.tr/tr",
  Siparis_ID: "Node4",
  Siparis_Aciklama: "Açıklama", 
  Taksit: "1",
  Islem_Tutar: "100,00",
  Toplam_Tutar: "100,00",
  Islem_Guvenlik_Tip: "NS",
  Islem_ID: "321", 
  IPAdr: "127.0.0.1",
  Ref_URL: "", 
  Data1: "1", 
  Data2: "1", 
  Data3: "2", 
  Data4: "3",
  Data5: "4", 
});

console.log("on_provizyon", response);

