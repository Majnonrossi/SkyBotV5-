let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) return m.reply(`Masukan id group...\n\nContoh : ${usedPrefix +command} 120363025272391108@g.us`)
	let group = args[0]
        await m.reply('Wait Otw Out')
        await conn.reply(args[0], 'Sayonara , , ! (≧ω≦)ゞ', m) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(outgc)$/i

handler.rowner = true

export default handler