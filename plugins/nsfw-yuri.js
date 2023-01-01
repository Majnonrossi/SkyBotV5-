import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random2/yuri?apikey=SadTeams'
	conn.sendButton(m.chat, 'Bojone Gepenk🐦\n Nsfw Yuri Ahhh~', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yuri)$/i
handler.tags = ['anime']
handler.help = ['yuri']
handler.limit = true
export default handler