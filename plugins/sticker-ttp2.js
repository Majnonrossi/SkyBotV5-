import { sticker } from '../lib/sticker.js'
import xa from 'xfarr-api'

let handler = async (m, { conn, text }) => {
let res = await xa.maker.ttp(text)
let stiker = await sticker(null, res.result, author, wm)
await conn.sendFile(m.chat, stiker, 'ttp.webp', '', m)
}
handler.command = ['ttp2']

export default handler