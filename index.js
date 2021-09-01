const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("its working!");
});

app.listen(3000, () => {
  console.log("Project is ready!");
});

let Discord = require("discord.js");
let client = new Discord.Client();
let snipe = new Discord.Collection();
const disbut = require('discord-buttons')(client);

client.on("ready", () => {
  client.user.setPresence({
    activity: { name: "Watching over assam senpai society | dhiman gae prove me wrong" },
    status: ""
  });
});

 client.on("messageDelete", message => {
 snipe.set(message.channel.id, {
 content: message.content,
 author: message.author,
 });
 });
 
client.on("message", message => {
 if (message.content === "+avatar" || message.content === "+Avatar" || message.content === "+av") { 
 let embed = new Discord.MessageEmbed()
.setTitle("")
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("PURPLE")
.setFooter(`${message.author.username}'s avatar'`)
message.channel.send(embed)
}


  if (message.content.startsWith("HI BOT")) {
    let victim = message.mentions.users.first();
    if (!victim) message.reply("");
    else {
      message.channel.send(`${victim}`);
    }
  }
   if (message.content === "HI BOT") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Hello kouhai <:kannaHeart:754278240125976597>")
      .setDescription("Your command has been recognised and you have been registered as an official member of Assam Senpai Society. Be sure to have fun. For more information on the bot type in")
      .setColor("RED")
      .setFooter("+HELP");
    message.channel.send(embed);
  }
  
  if (message.content === '+button') {
let test = new disbut.MessageButton()
 .setStyle('url')
 .setLabel("kekw") 
.setURL(`https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fassamsenpaisociety&e=ATNKil1gGZdp2tgCxVY5NwEVMnLn1zBki-irY1IdFb0nRAkrOeTj9fFiua6bxclXF206xIoPjT3dDFcDlbuuiFM&s=1`)
.setID(`click_here`)
message.channel.send(test)
}



  if (message.content === "BYE BOT") {
    let image = new Discord.MessageAttachment(
      "https://cdn.discordapp.com/attachments/772331092744863744/862730763496849458/tenor_9.gif",
      "dog.gif"
    );
    message.channel.send(image);
  }
  if (message.content.startsWith("+kiss")) {
    let kiss = [
      "https://c.tenor.com/v4Ur0OCvaXcAAAAd/koi-to-uso-kiss.gif",
      "https://c.tenor.com/O1-IX-P5ugQAAAAd/koi-to-uso-anime.gif",
      "https://c.tenor.com/36NbjGxwOT8AAAAd/anime-kissing.gif",
      "https://c.tenor.com/dp6A2wF5EKYAAAAC/anime-love.gif",
      "https://c.tenor.com/G954PGQ7OX8AAAAd/cute-urara-shiraishi-anime.gif"
    ];
    let kissed = kiss[Math.floor(Math.random() * kiss.length)];
    let victim = message.mentions.users.first();
    if (!victim) message.reply("kissing yourself? seriously?");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`${message.author.username} kissed ${victim}`)
        .setColor("BLUE")
        .setImage(kissed);
      message.channel.send(embed);
    }
  }


  if (message.content.startsWith("+hug")) {
    let hug = [
      "https://media1.tenor.com/images/c7efda563983124a76d319813155bd8e/tenor.gif?itemid=15900664",
      "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093",
      "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498",
      "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075",
      "https://media1.tenor.com/images/13719e13c6e09e63cf9ae020899bdd3b/tenor.gif?itemid=15793130"
    ];
    let hugged = hug[Math.floor(Math.random() * hug.length)];
    let victim = message.mentions.users.first();
    if (!victim) message.reply("hugging yourself is really painful");
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("")
        .setDescription(`${message.author.username} hugged ${victim}`)
        .setColor("BLUE")
        .setImage(hugged);
      message.channel.send(embed);
    }
  }

   if(message.content.startsWith("+release")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("we dont do that here")
 else {
 member.roles.remove("879045510550388786")
 message.channel.send("finally you found a way to escape. Nice, have fun <:PepeCoffee:867680728811569162>")
 }

 }else {
 message.reply("You don't have permission to do that")
 }
  }

  if(message.content.startsWith("+kidnap")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("we dont do that here")
 else {
 member.roles.add("879045510550388786")
 message.channel.send("sikeeee!! welcome to the gemy's so called 'basement'")
 }

 }else {
 message.reply("You don't have permission to do that")
 }
  }
 
 


  
  if (message.content.startsWith("+mute")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Whom do you want to mute?");
      else {
        member.roles.add("877133838164295730");
        message.channel.send("Member has been muted");
      }
    }
  } 
  if (message.content.startsWith("+unmute")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first();
      if (!member) message.channel.send("Whom do you want to unmute?");
      else {
        member.roles.remove("877133838164295730");
        message.channel.send("Member has been unmuted");
      }
    } else {
      message.reply("You don't have permission to do that");
    }
  }
  if (message.content.startsWith("+kick")) {
 if (message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that")
 }
  }
 

  if (message.content.startsWith("+ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();

      if (user) {
        const member = message.guild.member(user);

        if (member) {
          member
            .ban({
              reason: "They were bad!"
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply("I was unable to ban the member");

              console.error(err);
            });
        } else {
          message.reply("That user isn't in the server");
        }
      } else {
        message.reply("Whom do you want to ban?");
      }
    }
  }
  if (message.content.startsWith("+unban")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.reply("enter id");
    if (isNaN(args[0]))
      return message.reply("enter the id of the person u want to unban");
    message.guild.members.unban(args[0]);
  }
  }

  if (message.content.startsWith("+purge")) {
    let arg = message.content.split(" ");
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let clear = arg[1];
      if (!clear)
        return message.channel
          .send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`+purge 50\` `);
      if (isNaN(clear))
        return message.channel.send(
          ":x: | ``Please Put a Valid Number to Clear messages.``"
        );
      if (clear > 1000)
        return message.channel.send(
          ":x: | ``I can't Clear more than 1000 messages.``"
        );
      if (clear < 1)
        return message.channel.send(
          ":x: | ``You cannot Clear less than 1 message.``"
        );

      message.channel.bulkDelete(clear);
      message.channel
        .send()
        .then(message => message.delete({ timeout: 10000 }));
    } else {
      message.reply("You dont have perms!");
    }
  }
  if (message.content === "+snipe") {
    if (message.member.hasPermission("ADMINISTRATOR")) {

 const msg = snipe.get(message.channel.id); 
  if (!msg) message.reply("There's Nothing To Snipe");
   else {
  const embed = new Discord.MessageEmbed()
 .setTitle("Last Deleted Message")
 .setColor("RANDOM")
 .setTimestamp()
 .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
 .addField("Sender", message.author)
 .addField("Message", msg.content)
 message.channel.send(embed)
 }
  }
  }
  if(message.content.startsWith("+dm")) {
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}


 

  



 
    

})
client.login("<add_token_here>")
