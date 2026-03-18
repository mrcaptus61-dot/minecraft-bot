const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'samsun5361.aternos.me',
  port: 21808,
  username: 'AfkBot_Mert',
  version: false,
  checkTimeoutInterval: 60000
})

bot.on('spawn', () => {
  console.log('Bot sunucuya baglandi! Versiyon:', bot.version)
})

bot.on('end', (reason) => {
  console.log('Baglanti kesildi:', reason)
})

bot.on('error', (err) => {
  console.log('Hata:', err.message)
})

bot.on('kicked', (reason) => {
  console.log('Atildi:', reason)
})
