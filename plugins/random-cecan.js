let handler = async (m, { conn }) => {
let url = 'https://api.lolhuman.xyz/api/random/cecan?apikey=SadTeams'
let weem = 'Next ? Click Di Bawah !'
conn.sendButtonImg(m.chat, url, '```➩ Random : Cecan ```', weem, '⇄ Next ⇄', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['internet', 'random']
handler.command = /^(cecan)$/i
handler.limit = true

export default handler