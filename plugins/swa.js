import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
let url = 'https://telegra.ph/file/8829b40834e0ea36f122d.jpg'
let cap = `⬣━━━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━━━━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 & 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ *_〔 https://lynk.id/arif_zyn 〕_* 
┃
┗━━ꕥ *#Arifzyn* ꕥ━⬣

┏━ꕥ〔 Payment / Pembayaran 〕
┃✾ Dana    :  *〔 0895-3471-98105 〕*
┃✾ Gopay   :  *〔 0821-1230-9624 〕*
┃✾ Saweria :  *〔 https://saweria.co/arifzyn 〕*
┗━━ꕥ *#Arifzyn* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 500+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ #Arifzyn ꕥ━⬣

Baca Selengkapnya Untuk
Lebih Lanjut !!
${readMore}
┏━ꕥ〔 Info Donasi 〕
┃
┃✾ Yang Mau Donasi Boleh Silahkan 
┃✾ Uang donasi Digunakan
┃  Untuk Membeli
┃  Panel / Rdp Agar Bot Selalu on
┃  
┃✾ Yang Mau Donasi Nomor 
┃  Ada Di Atas
┃
┃✾ Atau Chat Owner Juga  Bisa
┃  Silahkan Tap Button Di Bawah
┃
┗━━ꕥ *© #Arifzyn* ꕥ━⬣

┏━ꕥ〔 Thanks To 〕
┃
┃✾ Trimakasih Yang Mau Donasi
┃
┃✾ Trimakasih Juga Yg Sewa Betah²
┃
┃✾ Thanks Allah SWT
┃
┃✾ Thanks All Member Miko Bot
┃
┗━━ꕥ *© #Arifzyn* ꕥ━⬣
`
/*conn.sendButtonDoc(m.chat, cap, author, 'owner', usedPrefix + 'owner', m, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© Miko𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© Miko𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(url)).buffer(),
    thumbnailUrl: sgc,
    title: 'Sewa Bot && Up To Premium'
				}
			}
})*/
await conn.reply(m.chat, cap, fkontak)
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)