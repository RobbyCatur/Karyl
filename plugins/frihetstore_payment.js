let handler = async (m, { conn }) => {
  conn.reply(m.chat, `
*_PAYMENT :_*
💸 OVO/SHOPEE/NEO/DANA : 082288316705 (AN M. ZULFADLI)
💸 GOPAY DI MENU
💸 QRIS DI MENU
💸 BCA VIRTUAL AKUN 
       1375300000623051
       MUHAMMAD ZULFADLI 
💸 BRI VIRTUAL AKUN
       1270100000623051
       MUHAMMAD ZULFADLI
`.trim(), m)
}

handler.command = /^(fsp)$/i
module.exports = handler
