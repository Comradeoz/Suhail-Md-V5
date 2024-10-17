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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_10_07_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmdjUXdjYXM3dHpncnNGeFZkbjhYcVc5VTI4eFRpb1djRU1rNEJPcjNvMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUpzWHUySGpTY2FaQS1ZZ09DMk5aQVwiLFxuICBcInBob25lSWRcIjogXCJkN2IxNWMyMi0yZWQ5LTRhZTEtODJhZC00NDIyY2NkMDcxZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMTMsXG4gICAgICA0MyxcbiAgICAgIDE0MSxcbiAgICAgIDE5MSxcbiAgICAgIDEwOSxcbiAgICAgIDIzMSxcbiAgICAgIDI0NyxcbiAgICAgIDYyLFxuICAgICAgMTI2LFxuICAgICAgMTE3LFxuICAgICAgOTksXG4gICAgICAxOTksXG4gICAgICA2OSxcbiAgICAgIDIxNCxcbiAgICAgIDMyLFxuICAgICAgMjUyLFxuICAgICAgMTQzLFxuICAgICAgMTQ4LFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTMxLFxuICAgICAgMTMxLFxuICAgICAgMTQ0LFxuICAgICAgMjMsXG4gICAgICAzLFxuICAgICAgMTc1LFxuICAgICAgMzEsXG4gICAgICA3OSxcbiAgICAgIDYzLFxuICAgICAgMTg5LFxuICAgICAgMTE5LFxuICAgICAgMTA3LFxuICAgICAgMTQsXG4gICAgICAxNSxcbiAgICAgIDE3NixcbiAgICAgIDIwNSxcbiAgICAgIDE5NyxcbiAgICAgIDI0OCxcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQlIyRFlRSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDIzODgwNDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdyYW5kcGEgQ3lyaWxcIixcbiAgICBcImxpZFwiOiBcIjEwMDQ1MTAxMzg4NjA5MDo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaXU1Tk1CRU1QeG83Z0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdoR0RQZGVsa2x6eUZpVHpiY1FKdlJGZGNwbHAzYmxDdUJlM2NRY2pia0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVElzYnVoVmp5WG5vajZEdlNNRnNOQm4vSUpienRBdWpBZzJFWFBDTWgvYVh6SnVIZDVvN0VlSllKeTNxMmdjOEdtSFpMcTBlMzUwa280TFR0ME1QREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMnFMNUJzbjBIcW54OUE5MlBPRi9BTWg1NXBDbERnUVp0c1VLSXBqZXFoOUdzWVIra3RUNEljT2dsMjVBZ0ZZcjVLZkFiTCtST2FhNU1qeHAzbzJtamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNDIzODgwNDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NjQxMjIzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
//read_message: process.env.AUTO_READ_MESSAGE || "true",
//reject_call: process.env.AUTO_REJECT_CALL || "true",
  
  

