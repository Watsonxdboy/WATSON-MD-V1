const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AjtFmLBC#Wrkck1rCMs5ls0oJlf8RmR_0t23J5NddTgMYPpuE6Ps",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/wZj8PVg.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "263781330745",
OWNER_NAME: process.env.OWNER_NAME || "WATSON XD",
BOT_NAME: process.env.BOT_NAME || "WATSON-MD-V1",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

