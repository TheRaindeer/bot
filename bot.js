const Discord = require('discord.js');
const Bot = new Discord.Client();

const token = 'G5p1WeVG_AvrFE9kuKa1eRVrDwi84F7L';

bot.on('ready', () =>{

console.log('This bot is online!');
})

bot.login(token);
