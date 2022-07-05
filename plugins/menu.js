let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

const defaultMenu = {
    before: `
𐐪··───━•〔 ll нασяι-вσт ཻུ⸙͎ 〕•━───··ɞ

🎐 *Name:* %name
🎐 *Tags:* %tag
🎐 *Premium:* %prems
🎐 *Age:* %age
🎐 *Limit:* %limit
🎐 *Money:* %money
🎐 *Role:* %role
🎐 *Level:* %level [%xp4levelup]
🎐 *Xp:* %exp / %maxexp
🎐 *Total Xp:* %totalexp

                *〔 llı TODAY ıll 〕*
🎐 Tanggal: *%week %weton, %date*
🎐 Tanggal Islam: *%dateIslamic*
🎐 Waktu: *%time*
🎐 Uptime: *%muptime*
🎐 Database: %rtotalreg dari %totalreg

                   *〔 llı INFO ıll 〕*      

🎐 *Nama Bot:* %me
🎐 *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
🎐 *Prefix:* [ Multi Prefix ]
🎐 *Speed:* ${neww - old} ms
🎐 *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
🎐 *Uptime:* %muptime
🎐 *Database:* %rtotalreg dari %totalreg


       *〔 llı INFO COMMAND ıll 〕*     

*Ⓟ* = Premium
*Ⓛ* = Limit
%readmore`.trimStart(),
  header: `
⁙╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━  ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
⁙┃╭┈─────────────⩵꙰ཱི࿐
⁙┃╰───━⃝┅ *%category* ┅⃝━───ꕥ ↶↷*
⁙├☆─〔 HAORI CHAN 〕──┈➤`,
  body: `⁙├〲 %cmd %islimit %isPremium`,
  footer: `⁙╰•──────━⃝┅⃝━─────┈ ⳹`,
  after: `
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❙❘❙❙❘❙❘❙❚❙❘❙❙❙❘❙❘❙❚❙❘❙❚❙❘❙❙❘❙❚❙❘ ⌕.
`,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

	//TAGS

	let tag = `@${m.sender.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

    let waofc = `@${'0'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let ow = `@${'6281379927605'.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let nurt = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let mds2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let admn = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

  let par = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par2 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par3 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par4 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let tq = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 let par6 = `@${''.split('@')[0]}`

 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

 

	let platform = os.platform()

	let merk = conn.user.phone.device_manufacturer

	let mode = global.opts['self'] ? 'Private' : 'Publik'

	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]

    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]



    let _uptime = process.uptime() * 1000

    let uptime = clockString(_uptime)

  let tags

  let teks = `${args[0]}`.toLowerCase()

  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'sound', 'vn', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']

  if (!arrayMenu.includes(teks)) teks = '404'

  if (teks == 'all') tags = {

    'main': 'Utama',

    'game': 'Game',

    'rpg': 'Epic Rpg',

    'xp': 'Exp & Limit',

    'fun': 'Fun',

    'jodoh': 'Jodoh',

    'gift': 'gift',

    'anime': 'Anime',

    'hentai': `NSFW`,

    'premium': 'Premium',

    'anonymous': 'Anonymous Chat',

    'kerang': 'Kerang Ajaib',

    'quotes': 'Quotes',

    'absen': 'Absen',

    'voting': 'vote',

    'admin': `Admin`,

    'group': 'Grup',

    'news': 'News',

    'internet': 'Internet',

    'edukasi': 'Edukasi',

    'quran': 'Islam',

    'image': 'Random Image',

    'sticker': 'Stiker',

    'nulis': 'MagerNulis & Logo',

    'audio': 'Pengubah Suara',
    
    'sound': 'Sound Music',
    
    'vn': 'Vn Imuet',
    
    'downloader': 'Downloader',

    'tools': 'Tools',

    'database': 'Database',

    'jadibot': 'Jadi Bot',

    'info': 'Info',

    '': 'Tanpa Kategori',

    'thnks': 'THANKS TO',

  }

  if (teks == 'game') tags = {

    'game': 'Game'

  }

  if (teks == 'xp') tags = {

    'xp': 'Exp & Limit'

  }

  if (teks == 'news') tags = {

    'news': 'News'

  }

  if (teks == 'edukasi') tags = {

    'edukasi': 'Edukasi'

  }

  if (teks == 'nsfw') tags = {

    'hentai': 'NSFW',

    'nsfw': 'HENTAI',

  }

  if (teks == 'stiker') tags = {

    'sticker': 'Stiker'

  }

  if (teks == 'rpg') tags = {

    'rpg': 'Epic Rpg'

  }

  if (teks == 'kerangajaib') tags = {

    'kerang': 'Kerang Ajaib'

  }

  if (teks == 'quotes') tags = {

    'quotes': 'Quotes'

  }

  if (teks == 'admin') tags = {

    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`

  }

  if (teks == 'grup') tags = {

    'group': 'Grup'

  }

  if (teks == 'premium') tags = {

    'premium': 'Premium'

  }

  if (teks == 'internet') tags = {

    'internet': 'Internet'

  }

  if (teks == 'image') tags = {

    'image': 'Random Image'

  }

  if (teks == 'anonymous') tags = {

    'anonymous': 'Anonymous Chat'

  }

  if (teks == 'nulis') tags = {

    'nulis': 'MagerNulis & Logo'

  }

  if (teks == 'downloader') tags = {

    'downloader': 'Downloader'

  }

  if (teks == 'tools') tags = {

    'tools': 'Tools'

  }

  if (teks == 'fun') tags = {

    'fun': 'Fun',

    'jodoh': 'Jodoh'

  }

  if (teks == 'jodoh') tags = {

    'jodoh': 'Jodoh'

  }

  if (teks == 'database') tags = {

    'database': 'Database'

  }

  if (teks == 'vote') tags = {

    'vote': 'Voting',

    'absen': 'Absen'

  }

    if (teks == 'anime') tags = {

    'anime': 'Anime'

  }

  if (teks == 'quran') tags = {

    'quran': 'Islam'

  }

  if (teks == 'gift') tags = {

    'gift': 'Gift'

  }

  if (teks == 'audio') tags = {

    'audio': 'Pengubah Suara'

  }
  
    if (teks == 'sound') tags = {
    'sound': 'Sound Music'

  }
  
  if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'

  }
  if (teks == 'jadibot') tags = {

    'jadibot': 'Jadi Bot'

  }

  if (teks == 'info') tags = {

    'info': 'Info'

  }

  if (teks == 'tanpakategori') tags = {

    '': 'Tanpa Kategori'

  }

  if (teks == 'thnks') tags = {

    'thnks': 'THANKS TO'

  }

  if (teks == 'owner') tags = {

    'owner': 'Owner',

    'host': 'Host',

    'advanced': 'Advanced'

  }







  try {

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))

    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]

    let premium = global.db.data.users[m.sender].premium

    let prems = `${premium ? 'Yes': 'No'}`

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

    let wm = global.botwm

    let datebot = global.botdate

    let logo = global.logo

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let bioo = (await conn.getStatus(who).catch(console.error) || {}).status || ''



//HITUNG MUNDUR

    const hariRaya = new Date('January 1, 2023 23:59:59')

    const sekarang = new Date().getTime()

    const Selisih = hariRaya - sekarang

    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));

    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))

    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)

    const hariRayaramadan = new Date('Maret 22, 2023 23:59:59')

    const sekarangg = new Date().getTime()

    const lebih = hariRayaramadan - sekarangg

    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));

    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))

    const detikk = Math.floor( lebih % (1000 * 60) / 1000)

const ultah = new Date('February 29, 2024 23:59:59')

    const sekarat = new Date().getTime() 

    const Kurang = ultah - sekarat

    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));

    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))

    const detek = Math.floor( Kurang % (1000 * 60) / 1000)

    

    let nama = await conn.getName(m.sender)

    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}





  let logo2 = fs.readFileSync('./src/mike.png')

  kanna = fs.readFileSync('./src/mike.png')

  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()

  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage

  //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    const ftroli = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + teks)).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }



    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let d = new Date(new Date + 3600000)

    let locale = 'id'

    // d.getTimeZoneOffset()

    // Offset -420 is 18.00

    // Offset    0 is  0.00

    // Offset  420 is  7.00

    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

    let date = d.toLocaleDateString(locale, {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    })

    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    }).format(d)

    let time = d.toLocaleTimeString(locale, {

      hour: 'numeric',

      minute: 'numeric',

      second: 'numeric'

    })

    let _uptime = process.uptime() * 1000

    let _muptime

    if (process.send) {

      process.send('uptime')

      _muptime = await new Promise(resolve => {

        process.once('message', resolve)

        setTimeout(resolve, 1000)

      }) * 1000

    }

    let muptime = clockString(_muptime)

    let uptime = clockString(_uptime)

    let neww = Math.round(performance.now())

    let old = Math.round(performance.now())

    let totalreg = Object.keys(global.db.data.users).length

    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {

      return {

        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],

        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],

        prefix: 'customPrefix' in plugin,

        limit: plugin.limit,

        premium: plugin.premium,

        enabled: !plugin.disabled,

      }
    })

    let menuawakri = `
╭━━━━━━━━━━━━━━━━━┈ꕥ
│    「 *Ʋser Ɩnfσrmαtισn* 」
└┬────────────────┈ ⳹
┌┤◦➛ *Nama :* *${name}*
││◦➛ *Exp :* *${exp}*
││◦➛ *Tag:* ${tag}
││◦➛ *Status:* ${premium ? 'Premium' : 'Free'} User
││◦➛ *Limit :* *${limit}*
││◦➛ *Level :* *${level}*
││◦➛ *Rank :* *${role}*
└┬────────────────┈ ⳹
┌┤         「 *Cαℓendαr*」
│└────────────────┈ ⳹
│◦➛ Hari: *${week}*
│◦➛ Weton: *${weton}*
│◦➛ Tanggal: *${date}*
│◦➛ Waktu: *${time}* 
│◦➛ Islam: *${dateIslamic}*
│◦➛ Uptime: *${uptime}*
└┬────────────────┈ ⳹
┌┤   「 *Bσt Ɩnfσrmαtισn* 」
│└────────────────┈ ⳹
│◦➛ Aktif selama ${uptime}
│◦➛ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Pengisian' : ''}` : '❓ Tidak Diketahui'}
│◦➛ Prefix : [Multi Prefix]
│◦➛ *${Object.keys(global.db.data.users).length}* Pengguna
│◦➛ *${totaljadibot.length}* Jadibot
│◦➛ *${conn.blocklist.length}* Terblock
│◦➛ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│◦➛ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰━━━━━━━━━━━━━━━━━┈ꕥ
*Official Bot By ${waofc}*
*Powered By ${ow}*`

    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()}, ${name} !`.trim(),
            description: menuawakri,
            buttonText: 'PILIH DISINI',
            listType: 1,
            footerText: wm,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `Semua Perintah`,
                  "description": "Menu Semua Perintah ✨",
                  "rowId": `${_p}? all`
                  }],
                "title": `List Menu ${conn.user.name}`
              }, {
                "rows": [{
                  "title": `Menu Anime`,
                  "description": "Menu search & random anime wibu baka>//<",
                  "rowId": `${_p}? anime`
                }],
                "title": "─────「 1 」"
              }, {
                "rows": [{
                  "title": `Menu Admin & Group`,
                  "description": "Menu untuk admin & grup",
                  "rowId": `${_p}? admin`
                }],
                "title": "─────「 2 」"
              }, {
                "rows": [{
                  "title": `Menu Anonymous`,
                  "description": "Menu untuk bermain anonymous chat versi whatsapp",
                  "rowId": `${_p}? anonymous`
                }],
                "title": "─────「 3 」"
              }, {
                "rows": [{
                  "title": `Menu Audio`,
                  "description": "Menu pengubah suara audio atau convert audio",
                  "rowId": `${_p}? audio`
                }],
                "title": "─────「 4 」"
              }, {
                "rows": [{
                  "title": `Menu Downloader`,
                  "description": "Menu download media video, foto, dan file",
                  "rowId": `${_p}? downloader`
                }],
                "title": "─────「 5 」"
              }, {
                "rows": [{
                  "title": `Menu Database`,
                  "description": "Menu cek database bot",
                  "rowId": `${_p}? database`
                }],
                "title": "─────「 6 」"
              }, {
                "rows": [{
                  "title": `Menu Edukasi`,
                  "description": "Menu edukasi untuk sehari-hari",
                  "rowId": `${_p}? edukasi`
                }],
                "title": "─────「 7 」"
              }, {
                "rows": [{
                  "title": `Menu Fun`,
                  "description": "Menu fun hanya untuk bersenang-senang, jangan baperan yaa<3",
                  "rowId": `${_p}? fun`
                }],
                "title": "─────「 8 」"
              }, {
                "rows": [{
                  "title": `Menu Game`,
                  "description": "Menu untuk bermain game dan mendapatkan xp untuk levelup",
                  "rowId": `${_p}? game`
                }],
                "title": "─────「 9 」"
              }, {
                "rows": [{
                  "title": `Menu Info`,
                  "description": "Menu info seperti pemilik bot dan source code bot",
                  "rowId": `${_p}? info`
                }],
                "title": "─────「 10 」"
              }, {
                "rows": [{
                  "title": `Menu Internet`,
                  "description": "Menu untuk menjelajah di internet",
                  "rowId": `${_p}? internet`
                 }],
                 "title": "─────「 11 」"
              }, {
                "rows": [{
                  "title": `Menu Islamic`,
                  "description": "Menu agama islam, tetap jaga toleransi beragama ya kak 🥰",
                  "rowId": `${_p}? islamic`
                }],
                "title": "─────「 12 」"
              }, {
                "rows": [{
                  "title": `Menu Jadibot`,
                  "description": "Menu jadibot smentara",
                  "rowId": `${_p}? jadibot`
                }],
                "title": "─────「 13 」"
              }, {
                "rows":[{
                  "title": `Menu Kerang Ajaib`,
                  "description": "Menu jawaban random dari bot, masa gak tau gak pernah nonton spongebob ya?",
                  "rowId": `${_p}? kerangajaib`
                }],
                "title": "─────「 14 」"
              }, {
                "rows": [{
                  "title": `Menu News`,
                  "description": "Menu berita lokal sampai internasional",
                  "rowId": `${_p}? news`
                }],
                "title": "─────「 15 」"
              }, {
                "rows": [{
                  "title": `Menu Nulis & Logo`,
                  "description": "Menu mager nulis & logo",
                  "rowId": `${_p}? nulis`
                }],
                "title": "─────「 16 」"
              }, {
                "rows": [{
                  "title": `Menu Nsfw`,
                  "description": "Menu khusus dewasa 🔞",
                  "rowId": `${_p}? nsfw`
                }],
                "title": "─────「 17 」"
              }, {
                "rows": [{
                  "title": `Menu Premium`,
                  "description": "Menu untuk user premium, jika ingin menggunakannya daftar premium dulu ke owner",
                  "rowId": `${_p}? premium`
                }],
                "title": "─────「 18 」"
              }, {
                "rows": [{
                  "title": `Menu Quotes`,
                  "description": "Menu random quotes & membuat quotes",
                  "rowId": `${_p}? quotes`
                }],
                "title": "─────「 19 」"
              }, {
                "rows": [{
                  "title":  `Menu RPG`,
                  "description": "Menu game rpg (role playing game)",
                  "rowId": `${_p}? rpg`
                }],
                "title": "─────「 20 」"
              }, {
                "rows": [{
                  "title": `Menu Random`,
                  "description": "Menu random foto, video, dan stiker",
                  "rowId": `${_p}? random`
                }],
                "title": "─────「 21 」"
              }, {
                "rows": [{
                  "title":  `Menu Stiker`,
                  "description": "Menu membuat stiker dan mencari stiker",
                  "rowId": `${_p}? stiker`
                }],
                "title": "─────「 22 」"
              }, {
                "rows": [{
                  "title":  `Menu Tools`,
                  "description": "Menu alat convert",
                  "rowId": `${_p}? tools`
                }],
                "title": "─────「 23 」"
              }, {
                "rows": [{
                  "title":  `Menu Update`,
                  "description": "Menu fitur baru bot, silahkan di cek <3",
                  "rowId": `${_p}? update`
                }],
                "title": "─────「 24 」"
              }, {
                "rows": [{
                  "title":  `Menu Vote & Absen`,
                  "description": "Menu untuk vote dan absen",
                  "rowId": `${_p}? vote`
                }],
                "title": "─────「 25 」"
                }, {
                "rows": [{
                  "title":  `Menu XP dan Limit`,
                  "description": "Menu cek level, xp, limit, dan pendaftaran user",
                  "rowId": `${_p}? xp`
                }],
                "title": "─────「 26 」"
                }, {
                "rows": [{
                  "title":  `Menu Owner`,
                  "description": `Menu khusus untuk owner ${conn.user.name}`,
                  "rowId": `${_p}? update`
                }],
                "title": "─────「 27 」"
                }, {
                "rows": [{
                  "title":  `Shop`,
                  "description": "Coming Soon",
                  "rowId": `${_p}shop`
                }],
                "title": "Gunakan Dengan Bijak 🔥"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    /*const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 9999,

    status: 1,

    surface : 1,

    message: '[ ! ] Memuat Menu ' + teks + '...\n ```[ ! ] Tunggu Sebentar```', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, '```[ ! ] wait...```', fload)*/

    // gunakan ini jika kamu menggunakan whatsapp bisnis

    //   throw `

    // ┌〔 DAFTAR MENU 〕

    // ├ ${_p + command} all

    // ├ ${_p + command} game

    // ├ ${_p + command} xp

    // ├ ${_p + command} stiker

    // ├ ${_p + command} kerang

    // ├ ${_p + command} quotes

    // ├ ${_p + command} admin

    // ├ ${_p + command} group

    // ├ ${_p + command} premium

    // ├ ${_p + command} internet

    // ├ ${_p + command} anonymous

    // ├ ${_p + command} nulis

    // ├ ${_p + command} downloader

    // ├ ${_p + command} tools

    // ├ ${_p + command} fun

    // ├ ${_p + command} database

    // ├ ${_p + command} vote

    // ├ ${_p + command} quran

    // ├ ${_p + command} audio

    // ├ ${_p + command} jadibot

    // ├ ${_p + command} info

    // ├ ${_p + command} tanpa kategori

    // ├ ${_p + command} owner

    // └────  

    //     `.trim()

    let groups = {}

    for (let tag in tags) {

      groups[tag] = []

      for (let plugin of help)

        if (plugin.tags && plugin.tags.includes(tag))

          if (plugin.help) groups[tag].push(plugin)

      // for (let tag of plugin.tags)

      //   if (!(tag in tags)) tags[tag] = tag

    }

    conn.menu = conn.menu ? conn.menu : {}

    let before = conn.menu.before || defaultMenu.before

    let header = conn.menu.header || defaultMenu.header

    let body = conn.menu.body || defaultMenu.body

    let footer = conn.menu.footer || defaultMenu.footer

    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after

    let _text = [

      before,

      ...Object.keys(tags).map(tag => {

        return header.replace(/%category/g, tags[tag]) + '\n' + [

          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {

            return menu.help.map(help => {

              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)

                .replace(/%islimit/g, menu.limit ? '🄻' : '')

                .replace(/%isPremium/g, menu.premium ? '🄿' : '')

                .trim()

            }).join('\n')

          }),

          footer

        ].join('\n')

      }),

      after

    ].join('\n')

    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: uptime, muptime,

      me: conn.user.name,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      exp: exp - min,

      maxexp: xp,

      totalexp: exp,

      

      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      mds2, par6, tag, waofc, ow, mds, admn, nurt, par, par2, par3, par4, tq, jhari, jjam, mmmenit, ddetik, harii, jamm, menitt, detikk, ohari, ojam, onet, detek, mode, merk, platform, _p, money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, neww, old,

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
      await conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), text.trim(), `Creator by ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×\nRuntime : ${uptime}\nHari : ${week}, ${date}\nPowered by @s.whatsapp.net`, 'Group Bot', `${_p}allgc`, 'Sewa Bot', `${_p}sewabot`, 'Store', `${_p}store`, m)
	  } catch (e) {
    conn.reply(m.chat, 'Delay! Sabar Ngab...', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {

  return list[Math.floor(Math.random() * list.length)]

}



const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)



function logos() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/abff7903bd674a8f9d307.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/ba940019735e224132f74.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/a332bbac803e3c631bb07.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/a5c91ab6c58c7be066654.jpg'

  }

  return imp

}

function gifs() {
  const _gif = moment.tz('Asia/Jakarta').format('HH')
  gif = "Selamat dinihari"
  if (_gif >= 4) {
    gif = 'https://telegra.ph/file/b7c6137acddd4d3ad549b.mp4'
  }
  if (_gif > 10) {
    gif = 'https://telegra.ph/file/3c293c40dfbdb559d7317.mp4'
  }
  if (_gif >= 15) {
    gif = 'https://telegra.ph/file/63918e5b529e0c76d30a2.mp4'
  }
  if (_gif >= 18) {
    gif = 'https://telegra.ph/file/787adc4d7364b72da75a9.mp4'
  }
  return gif
}

function logopdf() {

  const lgs = moment.tz('Asia/Jakarta').format('HH')

  res = "Selamat dinihari"

  if (lgs >= 4) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs > 10) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 15) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  if (lgs >= 18) {

    imp = 'https://telegra.ph/file/7bd906ce2693a57e6c8f2.jpg'

  }

  return imp

}



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Morning 🌆"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time > 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Evening 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌃"
  }
  return res
    }
