 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "18294797498";
global.sudo = process.env.SUDO || "18294797498";
global.owner = process.env.OWNER_NUMBER || "18294797498";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUkzbWVPcjhVOS9mZW9MQmU3UVgrYTdaZjZTL0ZsczYrbW1oUlluUHZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkVORTViUmU3d0NUbWo1WHZxWnE2WWcrWkxicGVzMXppRTlzMmFMYWJqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Qll6OTlBRUJXMEVIUi8weURSc0R3cGlDYm0yeUhtM01jcGoyRHY4aDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdlhTM3Rla2lyN3IycTJRL1F3R0R5Nzd1ZnFoZHl1Mjg5dC9ib1FMZ2tzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCTXZOOU9WcXU4LzVpUEo0S3g3bkdkSkc4Mm1rb2JVSGVHcTc4MFV3SFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVLVUcwNkduMEQ0aDVMeVdvMHlla3dyKy9LdTF2bWVNd1hqMC9rcGVpVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9VS0R2ZFk1NjBPcHYrMWFkZU1MNzNQYXNXbjMzZmdYRWY1TWhvalRGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBDbExneklKdWU1bG0zWDhNbDRWSi9hMVpweGxraXRwbFNERlplUU5YOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNSd3VLTnRvczJhUmlHWVJia0NPUWVpMVc1TUNhM2ZDSTdKcTJWM21lRXVMazBFWkIycEtPbEhuRCtkcXVrbmZmeVRWWW55dlpsZGc3Ukhya3RFRWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiIzWDZpdnF4WFRQdEJCSXdIUXBtb0dKYjd3SlZndjI4RUowSnpKbVZzVkdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0Nzk3NDk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxQUE4ODY0RkY1NkI0MkFEQjhDOUZGRkYyMUVFRTdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1MzQ4MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNCSTFiTFVDVENXVG9fYk9qcEIwNEEiLCJwaG9uZUlkIjoiZmExYmYyZTYtYjAwOS00YjY1LWE0MjUtY2IzYTlhMTExYTcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtZVGlzZDcra2EzYTNGbHArbEFCcmlCbHprZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3bmFBYW82bS9LOEsyQlBzNFdoTzZpZWxFM289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlkzMkRRR0YiLCJtZSI6eyJpZCI6IjE4Mjk0Nzk3NDk4OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii4uLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25icDZVREVNZkl6cm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVU0NXFpeU5UOFA1dG02N0kxb1RDYVRnRmZFS3N5Q1RYVHN5MVVhcENqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkpMd0E3U0ZmV3RXYU80L2ZTeExNRFFoU1FGRWx5Ylc1NlQxK0wvSnZ1MnlmRkZnYVR6OFo1UmtQT002UVR0SzA1N3FPUFVsL2Z1akcwTy9OOU1BQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFucmFWVDFtTTFnb2tTeG9CSThjVGZlbkE3R29uU0VId0Y4NmozVWdQRVJSM0JZbWFMenNOenp2RnMxNjJ3cmVhMmZvY0ZPSVlBV2VUL0ZUSTRDV2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTQ3OTc0OTg6OTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGxPT2Fvc2pVL0QrYlp1dXlOYUV3bWs0Qlh4Q3JNZ2sxMDdNdFZHcVFvdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzUzNDgwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNeFEifQ==" // eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUkzbWVPcjhVOS9mZW9MQmU3UVgrYTdaZjZTL0ZsczYrbW1oUlluUHZuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkVORTViUmU3d0NUbWo1WHZxWnE2WWcrWkxicGVzMXppRTlzMmFMYWJqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Qll6OTlBRUJXMEVIUi8weURSc0R3cGlDYm0yeUhtM01jcGoyRHY4aDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdlhTM3Rla2lyN3IycTJRL1F3R0R5Nzd1ZnFoZHl1Mjg5dC9ib1FMZ2tzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCTXZOOU9WcXU4LzVpUEo0S3g3bkdkSkc4Mm1rb2JVSGVHcTc4MFV3SFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVLVUcwNkduMEQ0aDVMeVdvMHlla3dyKy9LdTF2bWVNd1hqMC9rcGVpVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9VS0R2ZFk1NjBPcHYrMWFkZU1MNzNQYXNXbjMzZmdYRWY1TWhvalRGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBDbExneklKdWU1bG0zWDhNbDRWSi9hMVpweGxraXRwbFNERlplUU5YOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNSd3VLTnRvczJhUmlHWVJia0NPUWVpMVc1TUNhM2ZDSTdKcTJWM21lRXVMazBFWkIycEtPbEhuRCtkcXVrbmZmeVRWWW55dlpsZGc3Ukhya3RFRWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiIzWDZpdnF4WFRQdEJCSXdIUXBtb0dKYjd3SlZndjI4RUowSnpKbVZzVkdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0Nzk3NDk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxQUE4ODY0RkY1NkI0MkFEQjhDOUZGRkYyMUVFRTdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1MzQ4MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNCSTFiTFVDVENXVG9fYk9qcEIwNEEiLCJwaG9uZUlkIjoiZmExYmYyZTYtYjAwOS00YjY1LWE0MjUtY2IzYTlhMTExYTcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtZVGlzZDcra2EzYTNGbHArbEFCcmlCbHprZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3bmFBYW82bS9LOEsyQlBzNFdoTzZpZWxFM289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlkzMkRRR0YiLCJtZSI6eyJpZCI6IjE4Mjk0Nzk3NDk4OjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii4uLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25icDZVREVNZkl6cm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVU0NXFpeU5UOFA1dG02N0kxb1RDYVRnRmZFS3N5Q1RYVHN5MVVhcENqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkpMd0E3U0ZmV3RXYU80L2ZTeExNRFFoU1FGRWx5Ylc1NlQxK0wvSnZ1MnlmRkZnYVR6OFo1UmtQT002UVR0SzA1N3FPUFVsL2Z1akcwTy9OOU1BQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFucmFWVDFtTTFnb2tTeG9CSThjVGZlbkE3R29uU0VId0Y4NmozVWdQRVJSM0JZbWFMenNOenp2RnMxNjJ3cmVhMmZvY0ZPSVlBV2VUL0ZUSTRDV2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTQ3OTc0OTg6OTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGxPT2Fvc2pVL0QrYlp1dXlOYUV3bWs0Qlh4Q3JNZ2sxMDdNdFZHcVFvdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzUzNDgwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNeFEifQ==
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
