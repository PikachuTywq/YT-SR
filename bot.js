var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  // console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '1'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "501806146651160577") return;

  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark:`)
} 

 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark::`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'sets')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark:`)
} 
if (message.content.startsWith(prefix + 'setg')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark:`)
} 



});


client.login(process.env.BOT_TOKEN);
