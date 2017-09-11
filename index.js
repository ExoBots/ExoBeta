const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "MzU2NTA4NTUyNTczMjIyOTEz.DJgvnQ.8TBqdKtlHQB8v_p9QKhUZAtFQNg" // Recommended to load from json file. 
const prefix = "eb@";

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
	Bot.user.setGame('!play | ExoBeta');
    Bot.user.setStatus('streaming');
});
 
music(Bot);
Bot.login(token);