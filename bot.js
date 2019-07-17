const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("601161109667315724")
setInterval(function() {
channel.send(`ibrahem_gamer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);