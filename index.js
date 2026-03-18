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
    version: '1.21.1',
    checkTimeoutInterval: 60000,
    connect: (client) => {
      client.socket.setKeepAlive(true, 4000)
    }
  })

  bot.on('spawn', () => {
    console.log('Bot sunucuya baglandi!')
  })

  bot.on('end', (reason) => {
    console.log('Baglanti kesildi (' + reason + '), 10 saniye sonra yeniden baglaniyor...')
    setTimeout(createBot, 10000)
  })

  bot.on('error', (err) => {
    console.log('Hata:', err.message)
  })

  bot.on('kicked', (reason) => {
    console.log('Atildi:', reason)
  })
}

createBot()
