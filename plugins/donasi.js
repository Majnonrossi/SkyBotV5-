import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/1270e6fe31c7c534cef62.jpg'
let name = await conn.getName(m.sender)
let but1 = '𝐎𝐖𝐍𝐄𝐑'
let bit = usedPrefix + 'owner'
let donasi = `⮕ Sopipay = [082138188516]
⮕ 𝐃𝐚𝐧𝐚 = [082138188516]
*Atau Scan Qr Di Atas Untuk Payment*

𝐍𝗼𝐭𝐞 : 𝐉𝐢𝐤𝐚 𝐒𝐮𝐝𝐚𝐡 𝐃𝗼𝐧𝐚𝐬𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐢𝐫𝗺
𝐁𝐮𝐤𝐭𝐢 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫!!

𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
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
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝑺𝒄𝒂𝒏 𝑸𝑹 𝑰𝒏𝒊 𝑼𝒏𝒕𝒖𝒌 𝑩𝒂𝒚𝒂𝒓'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler