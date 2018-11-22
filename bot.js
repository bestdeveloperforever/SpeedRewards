const Discord = require("discord.js")
const client = new Discord.Client()
const adminprefix = "-";
const developers = ["462647886035812372"]
const prefix = "-";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('By Osama_DK')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});




client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done You Have Been Changed The Playing To ${argresult}**✅ `)
  } else  
  if (message.content.startsWith(adminprefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done You Have Been Changed The Watching To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlistening')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Done You Have Been Changed The Listening To ${argresult}**✅`)
  } else 
  if (message.content.startsWith(adminprefix + 'setstreaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Done You Have Been Changed The Streaming To ${argresult}**✅`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To ..${argresult}** ✅`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To :${argresult}** ✅`);
}


});

client.on("message", function(message) {
let messageArray = message.content.split(" ");
let command = messageArray[0];
let anarg = message.content.split(' ').slice(1).join(' ')
         var currentTime = new Date(),
          hours = currentTime.getHours() + 2 ,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          Year = currentTime.getFullYear() - 2000,
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();
          var suffix = 'AM';
          if (hours >= 12) {
             suffix = 'PM';
              hours = hours - 12;
         }
          if (hours == 0) {
              hours = 12;
          }
let DM = new Discord.RichEmbed()
    .setColor("ORANGE")
    .addField("**•DM Messages**","**"+anarg+"**")
if(command === `-DM`) {
    if(!message.channel.guild) return
 if (message.author.id !== '459875496344158209') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '459875496344158209') return;
    let toSend = message.mentions.users.first();
if(!toSend) return message.reply("** :x: |اسف لم اجد شخص بهاد الاسم| :x:** ")
    if(toSend.bot) return message.reply("**:x: | لا أستطيع ارسال رسالة لبوت| :x:**");
    if(anarg < 1) return message.reply("**-_-** ");
    toSend.send({embed:DM});
    message.reply("**|✅| تم**")
 }
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
        if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("**# - You dont have enough permissions!**");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
        if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("**# - You dont have enough permissions!**");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.login(process.env.BOT_TOKEN);
