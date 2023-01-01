const xpperbalan = 2
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomoney/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperbalan) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperbalan * count) {
    global.db.data.users[m.sender].money -= xpperbalan * count
    global.db.data.users[m.sender].balance += count
    conn.reply(m.chat, `Sukses menukarkan money sebesar ${count} money ✨\nMenjadi ${count} balance 💵`, m)
  } else conn.reply(m.chat, `[❗] Money anda tidak mencukupi untuk ditukar sebesar ${count} ✨`, m)
}
handler.help = ['moneytobalan <jumlah>']
handler.tags = ['xp']
handler.command = /^moneytobalan([0-9]+)|moneytobalan|moneytobalanall$/i

export default handler