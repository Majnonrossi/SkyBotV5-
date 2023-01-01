import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text }) => {
if (!text) throw 'Masukan url server...'
let res = await fetch(`https://api.lolhuman.xyz/api/minecraft/${text}?apikey=FaizCloudME88`)
let anu = await res.json()
let i = anu.result
let cap = `Version : ${i.version}
Online : ${i.players.online}
Max : ${i.players.max}
Latency : ${i.latency}`
m.reply(cap)
}
handler.command = ['servermc']

export default handler