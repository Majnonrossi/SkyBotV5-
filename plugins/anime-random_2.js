import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import Anime_Images from 'anime-images-api'
const API = new Anime_Images()

let handler = async (m, { conn, usedPrefix, command }) => {

if (command == 'hug') {
let { image } = await API.sfw.hug()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'kiss') {
let { image } = await API.sfw.kiss()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'slap') {
let { image } = await API.sfw.slap()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'punch') {
let { image } = await API.sfw.punch()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'wink') {
let { image } = await API.sfw.wink()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'pat') {
let { image } = await API.sfw.pat()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'kill') {
let { image } = await API.sfw.kill()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'cuddle') {
let { image } = await API.sfw.cuddle()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

if (command == 'wafiu') {
let { image } = await API.sfw.wafiu()
let stiker = await sticker(false, image, 'By Arifzyn', 'SkyBot')
m.reply('[❗] SEDANG DIPROSES')
await conn.sendFile(m.chat, stiker, 'hug.gif', 'Done !', m)
}

}
handler.help = handler.command = ['hug', 'kiss', 'slap', 'punch', 'wink', 'pat', 'kill', 'cuddle', 'wafiu']
handler.tags = ['anime']

handler.limit = true

export default handler



