let handler = async (m, { conn }) => {
  let teks = `*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
ð° *FrihetStore* ð°

86 ð = Rp 19.000
172 ð =Rp 38.000 
257 ð = Rp 57.000 
344 ð = Rp 76.000
429 ð = Rp 95.000
514 ð = Rp 114.000
600 ð = Rp 133.000
706 ð = Rp 153.000 
878 ð = Rp 191.000 
963 ð = Rp 210.000 
1050 ð = Rp 230.000 
1412 ð = Rp 306.000 
2195 ð =Rp 457.000
3688 ð = Rp 762.000 
5532 ð = Rp 1.143.000 
9288 ð = Rp 1.905.000 
â­SL/TW  Rp 115.000

MISI 100 DMâ
140 ð = Rp. 34.000
172 ð = Rp. 38.000
MISI 250 DM â
284 ð = Rp. 67.000
344 ð = Rp. 76.000
MISI 500 DMâ
569 ð = Rp. 135.000
600 ð = Rp. 133.000

â³ *_PROSES 1-10 MENIT. MAX 24 JAM_*
â ï¸ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*`.trim()
  m.reply(teks)
}

handler.command = /^(fsml)$/i

module.exports = handler