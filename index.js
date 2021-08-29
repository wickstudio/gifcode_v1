const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({
        intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
		Intents.FLAGS.GUILD_INTEGRATIONS,
		Intents.FLAGS.GUILD_WEBHOOKS,
		Intents.FLAGS.GUILD_INVITES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_MESSAGE_TYPING,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING
	]
})
const VERSION = '1.0.0';
const TOKEN = (process.env.token);
const prefix = "!"
const express = require("express");
const app = express();

app.listen(() => console.log("C O N T R O L"));
app.listen(() => console.log("goldentitan"));
app.use("/ping", (req, res) => {
    res.send(new Date());
});
client.on("ready", () => {
    client.user.setActivity(`type -help`);
    app.listen(() => console.log("ready"));
});




//Code Here

client.on('message', message =>{
  var args = message.content.split(' ');
if(args[0][0] == prefix && args[0].slice(1,args[0].length) == 'gif' && args[1].length > 0){
  let request = require('request');
        let options = {
            url: 'https://api.tenor.com/v1/search?q=' + args[1] + '&key=S5XDZBHFU4JM',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
            }
        };
        request.get(options,function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            let data = JSON.parse(response.body);
            let embed = new MessageEmbed();
            embed.setColor(0xFFB200);
            // random int

            var xx = data.results.length - 1;
            let rand = parseInt(Math.random() * (xx - 0) + 0);
      
            embed.setImage(data.results[ rand].media[0].gif.url);
           
            message.channel.send('',embed);
          });
       
}
}); 
client.login(process.env.token);
