import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan url !'
let res = await fetch(`https://api.lolhuman.xyz/api/nekopoi?apikey=SadTeams&url=${text}`)
let anu = await res.json()
let i = anu.result
let cap = `*Title :* ${i.title}
*Producers :* ${i.producers}
*Duration :* ${i.duration}

*Sinopsis :* ${i.sinopsis}


*Link DL :* ${JSON.stringify(i.link)}`
await conn.sendFile(m.chat, i.thumbnail, 'pp.jpg', cap, m)
}
handler.help = ['nekopoidl']
handler.tags = ['nsfw', 'downloader']
handler.command = /^(nekodl|nokopoidl)$/i

handler.limit = true 

export default handler