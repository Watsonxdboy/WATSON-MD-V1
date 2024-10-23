const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu,list,help",
    react: "⤵️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `

👋 *HELLO ${pushname}*

╭─━❮ *Welcome to WATSON-MD-V1* ❯━
╰──────────────
╭─━❮ ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ ❯━
 ╎ ⦁ ʙᴏᴛ ɴᴀᴍᴇ : 𝚆𝙰𝚃𝚂𝙾𝙽 ᴍᴅ v1
 ╎ ⦁ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : watsonFourpence
 ╎ ⦁ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 263781330745
╰━━━━━━━━━━━━━⪼

╭─━❮ *Download Menu* ❯━
╰──────────────
> ⟡━⟪ *📥* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .apk
 ╎ .fb
 ╎ .tiktok
 ╎ .twitter 
 ╎ .gdrive
 ╎ .mediafire 
 ╎ .ig
 ╎ .movie 
╰━━━━━━━━━━━━━⪼

╭─━❮ *Main Menu* ❯━
╰──────────────
> ⟡━⟪ *🧸* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .about
 ╎ .ai
 ╎ .alive
 ╎ .menu
 ╎ .owner
 ╎ .ping
 ╎ .repo
 ╎ .support
 ╎ .system 
╰━━━━━━━━━━━━━⪼

╭─━❮ *Fun Menu* ❯━
╰──────────────
> ⟡━⟪ *💃* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .animegirl
 ╎ .dog
 ╎ .fact
 ╎ .hack 
 ╎ .joke
 ╎ .quote
 ╎ .rvideo 
╰━━━━━━━━━━━━━⪼

╭─━❮ *Convert Menu* ❯━
╰──────────────
> ⟡━⟪ *🔄* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .convert
╰━━━━━━━━━━━━━⪼

╭─━❮ *Search Menu* ❯━
╰──────────────
> ⟡━⟪ *🔍* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .phub
 ╎ .srepo
 ╎ .yts
╰━━━━━━━━━━━━━⪼

╭─━❮ *Group Menu* ❯━
╰──────────────
> ⟡━⟪ *🧚* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .mute
 ╎ .unmute
 ╎ .promote
 ╎ .demote 
 ╎ .del
 ╎ .remove 
 ╎ .add
 ╎ .setgoodbye
 ╎ .setwelcome
 ╎ .getpic
╰━━━━━━━━━━━━━⪼

╭─━❮ *Owner Menu* ❯━
╰──────────────
> ⟡━⟪ *🫡* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .shutdown
 ╎ .broadcast
 ╎ .setpp
 ╎ .block
 ╎ .unblock
 ╎ .clearchats
 ╎ .jid
 ╎ .gjid
 ╎ .restart
 ╎ .setautobio
╰━━━━━━━━━━━━━⪼

╭─━❮ *Other Menu* ❯━
╰──────────────
> ⟡━⟪ *🎉* ⟫━⟡
╭━━━━━━━━━━━━━⪼
 ╎ .define
 ╎ .githubstalk
 ╎ .gpass
 ╎ .trt
 ╎ .weather 
╰━━━━━━━━━━━━━⪼

> *©𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐖𝐀𝐓𝐒𝐎𝐍 𝐗𝐃*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/wZj8PVg.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
