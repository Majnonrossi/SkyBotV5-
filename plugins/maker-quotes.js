import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan text...'
let url = `https://api.lolhuman.xyz/api/quotemaker2?apikey=FaizCloudME88&text=${text}&author=${global.author}`
conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'p.jpg', 'Nih Dah Jadi', m)
}
handler.help = ['quotemaker']
handler.tags = ['maker']
handler.command = ['quotemaker']

export default handler