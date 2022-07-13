const Discord = require("discord.js");

module.exports.config = {
    name: "ban",
    description: "Cấm Thành Viên",
    accessible_by: "members",
    dm_supported: false
}

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))
      return client.sendEmbed("Không phải admin mà đòi ban á :rolling_eyes:");
    if (args.length === 0) return client.sendEmbed("**Cho mị tên thằng đó đi**");
    try {
      const user = await message.mentions.members.first().ban();
      client.sendEmbed(`Chào bạn ${member} nhé`);
    } catch (err) {
      console.log(err);
      client.sendEmbed('#0099ff', 'Moderation', 'Link group nè: https://www.facebook.com/groups/nobihazavietnam', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
    }
}
