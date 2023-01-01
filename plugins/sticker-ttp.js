import { sticker } from '../lib/sticker.js'
import xa from 'xfarr-api'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let res = await xa.maker.ttp(teks)
    let stiker = await sticker(null, res.result, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler