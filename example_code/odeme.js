import { Odeme } from "./src/index.js";
import { ThreeDSTamamla } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testposws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await Odeme({
  KK_Sahibi: "John Doe",
  KK_No: "5571135571135575",
  KK_SK_Ay: "12",
  KK_SK_Yil: "26",
  KK_CVC: "000",
  KK_Sahibi_GSM: "5462970111", 
  Hata_URL: "https://dev.param.com.tr/en",
  Basarili_URL: "https://dev.param.com.tr/tr",
  Siparis_ID: "Node2",
  Siparis_Aciklama: "Açıklama", 
  Taksit: "1",
  Islem_Tutar: "100,00",
  Toplam_Tutar: "100,00",
  Islem_Guvenlik_Tip: "3D",
  Islem_ID: "321", 
  IPAdr: "127.0.0.1",
  Ref_URL: "", 
  Data1: "1", 
  Data2: "1", 
  Data3: "2", 
  Data4: "3", 
  Data5: "4", 
});

console.log("odeme", response[0].TP_WMD_UCDResult?.UCD_HTML);

/*
  1- 3D işlem yapıyorsanız, Ödemeyi tamamlamak için callback URL adresinizden gelen verileri kullanarak aşağıdaki gibi bir istek atmalısınız.
  2- NS(Non Secure) işlemlerde ThreeDSTamamla fonksiyonunu çalıştırmanıza gerek yoktur. ThreeDSTamamla fonksiyonu 3D(ThreeD) işlemler için gereklidir.
*/

const threeds = await ThreeDSTamamla({
  UCD_MD: "UCD_MD DEĞERİ", 
  Islem_GUID: "Islem GUID değeri",
  Siparis_ID: "Sipariş ID değeriniz.",
});

console.log("threeds", threeds);
