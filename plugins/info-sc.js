import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let imgr = fla.getRandom()
let pp = imgr + 'Info Script'
let name = await conn.getName(m.sender)
let cap = `Hai ${name} ${ucapan}

Lagi Cari Sc SkyBot
Nih Ada Di Bawah, Click Link !
Link : 
https://youtube.com/channel/UCbLk8Zd_85Kttqq6uIDqF5w

Website Owner !
Link :
https://lynk.id/arif_zyn

Mau Tanya Sama Owner ?
[ Click Link Di Bawah ! ]
https://bit.ly/3VzmBUY

Atau Click Button Di Bawah...
`
await conn.sendButtonDoc(m.chat, cap, author, 'Owner', usedPrefix + 'owner', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '漏 饾悞饾悿饾惒饾悂饾椉饾惌',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '漏 饾悞饾悿饾惒饾悂饾椉饾惌',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await (await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'Info Script SkyBot'  
				}
			}
})
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

export default handler