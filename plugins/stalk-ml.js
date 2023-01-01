import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.reply(m.chat, `Contoh : ${usedPrefix + command} ID|Zone ID\n\nContoh : ${usedPrefix + command} 425307045|9938`, m)
let [id, zone] = text.split`|`
let res = await mlstalk(id, zone)
conn.reply(m.chat, `ML Stalker

*[-] ID :* ${id}
*[-] Zone ID :* ${zone}
*[-] Nick ML :* ${res.userName}`, m)
}
handler.help = ['mlstalk']
handler.tags = ['stalker']
handler.command = /^(mlstalk)$/i

handler.limit = true 

export default handler 

async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}