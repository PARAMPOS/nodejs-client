import { OrtakOdeme } from "./src/index.js";
import { config } from "./src/configs/index.js";

config.URL = "https://testpos.param.com.tr/Tahsilat/to.ws/Service_Odeme.asmx?wsdl";
config.CLIENT_CODE = "10738";
config.CLIENT_USERNAME = "Test";
config.CLIENT_PASSWORD = "Test";
config.GUID = "0c13d406-873b-403b-9c09-a5766840d98c";

const response = await OrtakOdeme({
  Borclu_Kisi_TC: "",
  Borclu_Aciklama: "r|açıklama",
  Borclu_Tutar: "r|10,00",
  Borclu_GSM: "r|5555555555",
  Borclu_Odeme_Tip: "r|",
  Borclu_AdSoyad: "r|test",
  Return_URL: "r|https://dev.param.com.tr/tr",
  Islem_ID: "202220",
  Terminal_ID: "10738",
  Taksit: "1",
});

console.log("Rediret Edilecek Hash -> ", response[0].TO_Pre_Encrypting_OOSResult);
console.log("--------------------------------------------------------------------")
// Response içerisinde dönen TO_Pre_Encrypting_OOSResult değerini aşağıdaki gibi URL'in sonuna ekleyip redirect yapmanız gerekmektedir.
const returnURI = `https://testpos.param.com.tr/Tahsilat/Default.aspx?s=${response[0].TO_Pre_Encrypting_OOSResult}`
console.log(returnURI);

//
