const fs = require('fs')
const chalk = require('chalk')

//owner vcard
global.ytname = "YT: Rein"
global.socialm = "GH: FarelHanafi"
global.location = "indonesia"

//global settings
global.botname = 'nusa-bot'
global.ownernumber = '+62 821-9283-4347'
global.ownername = 'itznusa'
global.websitex = "https://特別な人"
global.wagc = "https://wa.me/qr/KXB6UOIEX5AFF1"
global.themeemoji = '🪀'
global.wm = "nusa-bot."
global.packname = "Sticker By nusa-bot"
global.author = "nusa-bot\n+62 821-9283-4347"
global.creator = "6282192834347@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["+62 821-9283-4347"]
global.hituet = 0

global.lann = ''
global.lolkey = ""

global.APIKeys = { 
  'https://api.betabotz.eu.org': '',
  'https://api.lolhuman.xyz': ''
}
//database
global.MONGODB = "mongodb://tess:koclok890@ac-whbyauf-shard-00-00.cblvjgh.mongodb.net:27017,ac-whbyauf-shard-00-01.cblvjgh.mongodb.net:27017,ac-whbyauf-shard-00-02.cblvjgh.mongodb.net:27017/?ssl=true&replicaSet=atlas-p4jmck-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
//bot sett
global.autoblocknumber = ''
global.antiforeignnumber = ''
global.welcome = true
global.antiswview = true
global.anticall = true
global.autoswview = true
global.adminevent = false
global.groupevent = false
global.thumb = fs.readFileSync('./RellMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.green(`FILE UPDATED => ${__filename}`));
  delete require.cache[file];
  require(file);
});
