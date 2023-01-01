import { tiktok } from '../lib/ttscrape2.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {

   if (!text) throw `Imput Url TikTok`
   let res = await tiktok(text)
  m.reply(wait)
  const cap = `${res.title}

*Author :* ${res.author}
*Type :* No Watermark
*Creator :* Cahyo Kun`
  await conn.sendButton(m.chat, cap, author, res.wm, [
['♬ Audio', usedPrefix + 'ttaudio ' + text], 
[sym + ' owner', usedPrefix + 'owner ' + text]
], m)
}
handler.help = ['tiktoknowm <url>']
handler.tags = ['downloader']

handler.command = /^(tiktoknowm|ttnowm)$/i
handler.limit = true

export default handler