require("dotenv").config();

const { MessageEmbed } = require('discord.js');
const { Client, WebhookClient } = require('discord.js');
const kenjiHappyFace = ""

var muted = false

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});
const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

const PREFIX = ">";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  function sendEmbed(color, title, description, thumbnail, image){
    const embed = new MessageEmbed()
          .setColor(color)
          .setTitle(title)
          //.setURL('https://discord.js.org/')
          //.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
          .setDescription(description)
          .setThumbnail(thumbnail)
          /*.addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
          )*/
          //.addField('Inline field title', 'Some value here', true)
          .setImage(image)
          .setTimestamp()
          //.setFooter({ text: "Đệ tử Kanao", iconURL: 'https://i.imgur.com/AfFp7pu.png' });
      //message.channel.send({content: 'Bruh', embeds: [embed] })
    message.channel.send(embed)
  }

  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    console.log(message.author.username, '(',message.author.id,'): ',message.content)
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/); 
      if (CMD_NAME === 'help'){
        const embed = new MessageEmbed()
          .setColor('#3333ff')
          .setTitle('Trợ Giúp')
          //.setURL('https://discord.js.org/')
          //.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
          .setDescription('Một số lệnh')
          .setThumbnail("https://i.imgur.com/Ld1y87B.jpeg")
          .addFields(
            { name: 'Một số lệnh', value: '>group: Gửi Link Group' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
          )
          //.addField('Inline field title', 'Some value here', true)
          //.setImage(image)
          .setTimestamp()
          //.setFooter({ text: "Đệ tử Kanao", iconURL: 'https://i.imgur.com/AfFp7pu.png' });
      //message.channel.send({content: 'Bruh', embeds: [embed] })
    message.channel.send(embed)
      }
    if (CMD_NAME === 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS'))
        sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");
      if (args.length === 0)
        sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình kick ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
      const member = message.mentions.members.first();
      if (member) {
        member
          .kick()
          .then((member) => sendEmbed("#66ff33", "Moderation", `Tạm biệt ${member} nhé :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
          .catch((err) => sendEmbed("#ff0000", "Moderation", "Em chịu anh ơi :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
      } else {
        sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
      }
    }  

    else if (CMD_NAME === 'mute') {
      let time = args[1]
      if (!message.member.hasPermission('KICK_MEMBERS'))
        sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");
      if (args.length === 0)
        sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình mute ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
      if (!time){
        if (muted == false){
          const member = message.mentions.members.first();
          if (member) {
            member
              .roles.add('953282221169594398')
              .then((member) => sendEmbed("#66ff33", "Moderation", `${member} đã bị khâu mồm :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
              .catch((err) => message.channel.send('**Em chịu anh ơi** :frog:'));
            muted = true
              
          } else {
            sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
          }
        } else {
          const member = message.mentions.members.first();
          sendEmbed("#ff0000", "Moderation", `${member} đang bị khóa mõm`, "https://i.imgur.com/Ld1y87B.jpeg", "")
        }
      } else {
        const member = message.mentions.members.first();
        if (muted == false){
          if (member) {
            member
              .roles.add('953282221169594398')
              .then((member) => sendEmbed("#66ff33", "Moderation", `${member} đã bị khâu mồm trong ${ms(ms(time))} :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
              //.catch((err) => message.channel.send('**Em chịu anh ơi** :frog:'));
            muted = true
            setTimeout(function(){
              member
                .roles.remove('953282221169594398')
                .then((member) => sendEmbed("#66ff33", "Moderation", `${member} đã được mở khóa mồm :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
                .catch((err) => sendEmbed("#ff0000", "Moderation", "Em chịu anh ơi :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
              muted = false
            }, ms(time))
          } else {
            sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
          }
        } else {
          const member = message.mentions.members.first();
          sendEmbed("#ff0000", "Moderation", `${member} đang bị khóa mõm`, "https://i.imgur.com/Ld1y87B.jpeg", "")
        }
      }
    }
    else if (CMD_NAME === 'unmute') {
      if (!message.member.hasPermission('KICK_MEMBERS'))
        sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");
      if (args.length === 0)
        sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình mute ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
      const member = message.mentions.members.first();
      if (muted == true){
        if (member) {
          member
            .roles.remove('953282221169594398')
            .then((member) => sendEmbed("#66ff33", "Moderation", `${member} đã được mở khóa mồm :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
            .catch((err) => sendEmbed("#ff0000", "Moderation", "Em chịu anh ơi :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
          muted = false
        } else {
          sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
        }
      } else {
        const member = message.mentions.members.first();
        sendEmbed("#ff0000", "Moderation", `${member} hiện đang không bị khóa mõm`, "https://i.imgur.com/Ld1y87B.jpeg", "")
      }
    }
    else if (CMD_NAME === 'ban') {
      if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.reply("Không phải admin mà đòi ban á :rolling_eyes:");
      if (args.length === 0) return message.reply("**Cho mị tên thằng đó đi**");
      try {
        const user = await message.guild.members.first().ban();
        message.channel.send(`**Chào bạn ${member} nhé**`);
      } catch (err) {
        console.log(err);
        message.channel.send('Có một sự cố đã xảy ra. Có lẽ do đã có lỗi gì đó hoặc mị không đủ quyền để ban người này');
      }
    } 
    else if (CMD_NAME === 'group') {
      sendEmbed('#0099ff', 'Link Group', 'Link group nè: https://www.facebook.com/groups/nobihazavietnam', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
    }

    else if (CMD_NAME === 'games') {
      if (args.length === 0){
        sendEmbed('#ff0000', 'Link Game', 'Bạn đùa tôi à? Hỏi game mà không nói tên game nào', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
      }
      if (args  == 'hung_dong_dam_mau') {
        sendEmbed('#ff0000', 'Link game', 'Link game nhé: https://bit.ly/hungdongdammau', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
      }
      if (args  == 'omega_kendin') {
        sendEmbed('#ff0000', 'Link game', 'Link game nhé: https://drive.google.com/file/d/1QAzuPsOKtuAOfg3yHxXA7niHJ-1x9j4S/view', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
      }
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.add('738664659103776818');
        break;
      case '🍌':
        member.roles.add('738664632838782998');
        break;
      case '🍇':
        member.roles.add('738664618511171634');
        break;
      case '🍑':
        member.roles.add('738664590178779167');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.remove('738664659103776818');
        break;
      case '🍌':
        member.roles.remove('738664632838782998');
        break;
      case '🍇':
        member.roles.remove('738664618511171634');
        break;
      case '🍑':
        member.roles.remove('738664590178779167');
        break;
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
