const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349114238804,2348144294226";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114238804";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349114238804,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_24_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSC9wSUpUVXl6VjczVVg0Zyt3NlF4TW9WeUJ1ZmdmamUwdDEzY3J4WkdiYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTVBKZDVUMERSYldQQjlsSmdqblg4d1wiLFxuICBcInBob25lSWRcIjogXCJjOTE1ZGY3NC1lNTQ2LTRiOGUtYjFmMC1jMmRkNWU3MTA4ZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjEyLFxuICAgICAgODQsXG4gICAgICAxNzAsXG4gICAgICAxNTAsXG4gICAgICAyMjksXG4gICAgICAxMjMsXG4gICAgICAyMDYsXG4gICAgICAxMjAsXG4gICAgICAzNixcbiAgICAgIDY4LFxuICAgICAgNTcsXG4gICAgICAyMTgsXG4gICAgICAzMSxcbiAgICAgIDE2LFxuICAgICAgMTQ3LFxuICAgICAgNixcbiAgICAgIDE3MCxcbiAgICAgIDI4LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDE1MCxcbiAgICAgIDI0MyxcbiAgICAgIDkwLFxuICAgICAgODEsXG4gICAgICA0NyxcbiAgICAgIDIzNSxcbiAgICAgIDE5LFxuICAgICAgMjQzLFxuICAgICAgMTc4LFxuICAgICAgNzIsXG4gICAgICA2NyxcbiAgICAgIDEwOSxcbiAgICAgIDIxNixcbiAgICAgIDE4NSxcbiAgICAgIDE5NyxcbiAgICAgIDMwLFxuICAgICAgMTg1LFxuICAgICAgODgsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjVMSkRFVkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQyMzg4MDQ6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHcmFuZHBhIEN5cmlsXCIsXG4gICAgXCJsaWRcIjogXCIxMDA0NTEwMTM4ODYwOTA6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWV1NU5NQkVPM282N1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHaEdEUGRlbGtsenlGaVR6YmNRSnZSRmRjcGxwM2JsQ3VCZTNjUWNqYmtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktzRlhnam55dzVFRWNBZWMrY1dubDdoYTZTZGVGT2tVQ21VNFp1blpub0pJdlNRSFZWcENyQmdzTXozcE16NWM5ZlJaSVBWQkFFUmNIcmpqWWlTSkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF0OFhodzBWZ3VJMXRkL1ZaYWRLTFFVTFBZNytFb2FaazkvY01tU1pSdVpZZ1BpWkZHMXlDSDg2bkVKYmhZd0xhOGVQMHBZMlFobVIxVUc5cEdnWEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQyMzg4MDQ6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTYyNTQ1N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Grandpa Cyril",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "GRANDPA-CYRIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
