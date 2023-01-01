let handler = async (m, { conn, usedPrefix, command }) => {
const url = 'https://web-production-bdd4.up.railway.app/api/wallpaper/miku?apikey=APIKEY'
conn.sendFile(m.chat, url, 'miku.jpg', 'Nih Miku :v', m)
}
handler.command = ['mikunakano']

export default handler