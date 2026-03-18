const mineflayer = require('mineflayer')
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200)
  res.end('Bot calisiyor!')
}).listen(3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'samsun5361.aternos.me',
    port: 21808,
    username: 'AfkBot_Mert',
    version: '1.21.11'
  })

  bot.on('spawn', () => {
    console.log('Bot sunucuya baglandi!')
  })

  bot.on('end', () => {
    console.log('Baglanti kesildi, 5 saniye sonra yeniden baglaniyor...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Hata:', err.message)
    setTimeout(createBot, 5000)
  })
}

createBot()
