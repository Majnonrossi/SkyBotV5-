import { tiktok } from '../lib/tiktok.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw 'Masukan url tiktok...'
let res = await tiktok(text)
let cap = `${res.title}

*Creator :* ${res.creator}
*Author :* ${res.author}`
conn.sendButtonVid(m.chat, res.nowm, cap, author, 'Get Audio', usedPrefix + 'audioget ' + res.audio, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)$/i

handler.limit = true

export default handler