const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTg2Njc4NDI3MDkzMDQxMTcy.XP1yww.BgtOpcc5sAYxAxVk0rpFmTRK67w);//BOT_TOKEN is the Client Secret
