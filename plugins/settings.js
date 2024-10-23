const { cmd, commands } = require('../command');

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        return await conn.sendMessage(from, {
            image: { url: 'https://i.imgur.com/wZj8PVg.jpeg' },
            caption: '𝐖𝐀𝐓𝐒𝐎𝐍 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 ⚙️\n\n*Cheng Alive&Menu IMG*\n.update ALIVE_IMG: Your Image Url\n\n*Cheng Alive MSG*\n.update ALIVE_MSG: Your Alive MSG\n\n*Cheng Prefix*\n.update PERFIX: your prefix (.,$#%&)\n\n*Auto Status Seen*\n.update AUTO_READ_STATUS: true or false\n\n*Mode*\n.update MODE: private, public, index or group\n\n*Auto Reply*\n.update AUTO_VOICE: true or false\n.update AUTO_IMAGE: true or false\n.update AUTO_VIDEO: true or false\n.update AUTO_STICKER: true or false\n.update AUTO_REPLY: true or false\n.update AUTO_AI: true or false'
                
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
