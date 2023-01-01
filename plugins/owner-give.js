let handler = async (m, { conn, text, command, usedPrefix }) => {
	if (!text) return m.reply('masukan jumlah money')
		let chat = global.db.data.users
		for (let x of Object.keys(chat)) {
				global.db.data.users[x].money += text
		}
		m.reply(`Sukses menambah money ke semua user\nTotal Money : ${text}`)
}

handler.help = ['givemoney']
handler.tag = ['owner']
handler.command = /^(givemoney)$/i

handler.owner = true

export default handler