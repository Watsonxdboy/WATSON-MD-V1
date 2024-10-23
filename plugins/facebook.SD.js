const command = require("../command");
const fbDlByMrNima = require('@mrnima/facebook-downloader');


command.cmd({
    pattern: "fbsd",
    desc: "download facebook videos. [HD]",
    category: "download"
},
    async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
            if (!q) return reply("please give me url facebook video link.");
            await reply("```Downloading [ SD video ]...```")
            const result = await fbDlByMrNima.facebook(q);
            var caption = "*FACEBOOK DOWNLOADER*\n- Duration: " + result.result.duration
            var quality = result.result.links;
            if (quality.SD) {
                await conn.sendMessage(from, { video: { url: quality.HD }, mimetype: "video/mp4", caption: caption + "\n> SD QUALITY" }, { quoted: mek });
            }
        } catch (e) {
            console.log(e)
            reply(`${e}`)
        }
    })
