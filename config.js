const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': '4d31917e1b',
}

global.lolkey = 'AdrianTzy'
global.dryan = 'dryanbot'
global.owner = ['6289513081052']
global.namabot = '𝐍𝐚𝐢𝐬𝐚-𝐌𝐃'
global.premium = owner
global.packname = '© 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐁𝐲'
global.author = namabot 
global.sessionName = 'session' // Jangan Diganti 
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/dryan.jpg')
global.thumbb = fs.readFileSync('./media/dryan.mp4')


// Jangan Diganti Atau Dihapus Nanti Error
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
