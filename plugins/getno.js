let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let no = `${who.split`@`[0]}`
m.reply(no)
}
handler.help = ['getno']
handler.tags = ['tools']
handler.command = /^(getno)mor$/i

export default handler