const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'samsun5361.aternos.me',
  port: 21808,
  username: 'AfkBot_Mert',
  version: '1.21.1',
  checkTimeoutInterval: 60000
})

bot.on('spawn', () => {
  console.log('Bot sunucuya baglandi!')
})

bot.on('end', (reason) => {
  console.log('Baglanti kesildi:', reason)
  // GitHub Actions timeout ile yeniden tetiklenecek
})

bot.on('error', (err) => {
  console.log('Hata:', err.message)
})

bot.on('kicked', (reason) => {
  console.log('Atildi:', reason)
})
