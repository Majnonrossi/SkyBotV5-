let handler = async (m, { conn, usedPrefix, command }) => {
let info = `Hai, @${await conn.getName(m.sender)}

Silahkan Pilih Top Up Di Bawah

Click Untuk Liat Pembayaran !`
const sections = [
   {
	title: `Top Up By SkyBot`,
	rows: [
	{title: "50 Miliyar money", rowId: '.payment', description: "Harga : 5K / 1 Nomor"},
	{title: "100 Miliyar money", rowId: '.payment', description: "Harga : 7K / 1 Nomor"},
	{title: "500 Miliyar money", rowId: '.payment', description: "Harga : 8K / 1 Nomor"},
	{title: "1 Triliun money", rowId: '.payment', description: "Harga : 10K / 1 Nomor"},
	{title: "10 Triliun money", rowId: '.payment', description: "Harga : 13K / 1 Nomor"},
	{title: "50 Triliun money", rowId: '.payment', description: "Harga : 15K / 1 Nomor"},
	{title: "100 Triliun money", rowId: '.payment', description: "Harga : 17K / 1 Nomor"},
	{title: "500 Triliun money", rowId: '.payment', description: "Harga : 20K / 1 Nomor"},
	{title: "1 Kuadriliun Money", rowId: '.payment', description: "Harga : 23K / 1 Nomor"},
	{title: "10 Kuadriliun money", rowId: '.payment', description: "Harga : 25K / 1 Nomor"},
	{title: "50 Kuadriliun money", rowId: '.payment', description: "Harga : 27K / 1 Nomor"},
	{title: "100 Kuadriliun money", rowId: '.payment', description: "Harga : 30K / 1 Nomor"},
	{title: "500 Kuadriliun money", rowId: '.payment', description: "Harga : 33K / 1 Nomor"},
	{title: "1e money", rowId: '.payment', description: "Harga : 35K / 1 Nomor"},
	{title: "10e money", rowId: '.payment', description: "Harga : 37K / 1 Nomor"},
	{title: "50e money", rowId: '.payment', description: "Harga : 40K / 1 Nomor"},
	{title: "100e money", rowId: '.payment', description: "Harga : 43K / 1 Nomor"},
	{title: "1500e money", rowId: '.payment', description: "Harga : 40K / 1 Nomor"},
	{title: "Unlimited/Infinity money", rowId: '.payment', description: "Harga : 50K / 1 Nomor"},
	]
}, {
title: 'Info My Owner',
rows: [
{title: "Owner", rowId: '.owner', description: "Nomor Owner Yang Sangsat Kece"},
{title: "Sewabot", rowId: '.sewabot', description: "Info Harga Sewabot"}
]
}
]

const listMessage = {
  text: info,
  footer: author,
  title: '❏–––––『 Top Up Money 』–––––❏',
  buttonText: "Click Here︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(info) })
}
handler.help = ['topup']
handler.tags = ['info', 'store']
handler.command = ['topup']

export default handler