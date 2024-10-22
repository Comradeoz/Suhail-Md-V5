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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO REJECT CALL ] =========================\\
global.rejectcall = process.env.REJECT_CALL || "true"
global.rejectcallfrom = process.env.REJECT_CALL_FROM || "2348144294226"


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349114238804,923683654288,2347064201052,07037678106,07088125885,09114238801,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_00_22_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJuVGMxUDlKamlySWtjWkFMem5QUmx2ZitNb1l6ZEF0K2lodnN3WHh6MW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpreWZ0VzBBVG5pb2x0ZVdRcWQ0UmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzZjNDllZmQtYjhiNy00N2UwLWI3MmUtYWRjYmVjNjZkNmFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgNTcsXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICAyNDYsXG4gICAgICA4OSxcbiAgICAgIDE3NixcbiAgICAgIDk2LFxuICAgICAgMTgyLFxuICAgICAgNjAsXG4gICAgICAyMyxcbiAgICAgIDEyNCxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDU1LFxuICAgICAgNTYsXG4gICAgICA4NixcbiAgICAgIDIyOSxcbiAgICAgIDExMixcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDI4LFxuICAgICAgMTkyLFxuICAgICAgMTUxLFxuICAgICAgODAsXG4gICAgICAxNzIsXG4gICAgICAyMTksXG4gICAgICAxNzUsXG4gICAgICAxMDcsXG4gICAgICA0MSxcbiAgICAgIDgwLFxuICAgICAgMCxcbiAgICAgIDYwLFxuICAgICAgMjcsXG4gICAgICAxMSxcbiAgICAgIDUsXG4gICAgICAxNjgsXG4gICAgICAxMjksXG4gICAgICA2MyxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSQlpQV1hIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE0MjM4ODA0OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR3JhbmRwYSBDeXJpbFwiLFxuICAgIFwibGlkXCI6IFwiMTAwNDUxMDEzODg2MDkwOjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qZG5iMEJFTC9nMjdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVm5ZeG8xUmRhU2tsU3pMVTluWk0zNnlXYmZHV29wMU52dmxxa2t5ODFETT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJod1NUS1c4QzZuSlV4TnR0ZGtsOGtsblFvZkN6SHFDS0lvQ0ovdC93bUhYRFlsbDJuMUVTSnhMMU9Fd1d0dE9KVTVZeTdYWk1BTVlSeVJIOXpYS29BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvSGp0eWNVK2hzYm9NcFBxdlFyMVZnUTc3WjZhczJkSjc4cEZTanczcU52cGJRWnBSazE3VVZyMHNKNFdCNnQ0ekNyQU1YN0REcjYrTk5tN20zL1RDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0MjM4ODA0OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTU2NTQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
  //readmessage:process.env.READ_MESSAGE|| "true",
//replymessage:process.env.REPLY_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
//reply_message: process.env.AUTO_REPLY_MESSAGE || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
//read_message: process.env.AUTO_READ_MESSAGE || "true",
//reject_call: process.env.AUTO_REJECT_CALL || "true",
  
  

