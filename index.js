const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'samsun5361.aternos.me',
    port: 21808,
    username: 'AFK_Bot',
    version: '1.21.4',
    checkTimeoutInterval: 60000
  })

  bot.on('spawn', () => {
    console.log('Bot sunucuya baglandi! Versiyon:', bot.version)
  })

  bot.on('end', (reason) => {
    console.log('Baglanti kesildi:', reason)
    console.log('30 saniye sonra yeniden baglaniliyor...')
    setTimeout(createBot, 30000)
  })

  bot.on('error', (err) => {
    console.log('Hata:', err.message)
  })

  bot.on('kicked', (reason) => {
    console.log('Atildi:', reason)
    console.log('30 saniye sonra yeniden baglaniliyor...')
    setTimeout(createBot, 30000)
  })
}

createBot()
