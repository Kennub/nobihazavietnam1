const Discord = require("discord.js");

module.exports.config = {
    name: "ban",
    description: "Cấm Thành Viên",
    accessible_by: "members",
    dm_supported: false
}

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))
      return client.sendEmbed('#ff0000', 'Moderation', `Bạn không đủ thẩm quyền để làm việc này, tên ngốc ạ :smile:`, 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg');
    if (args.length === 0) return client.sendEmbed("#ff0000", "Moderation", `Ban ai thế?`, "https://i.imgur.com/Ld1y87B.jpeg", "");
    try {
      const user = await message.mentions.members.first().ban();
      client.sendEmbed("#66ff33", "Moderation", `${member} đã cuốn gói khỏi server :smile:`, "https://i.imgur.com/Ld1y87B.jpeg", "");
    } catch (err) {
      console.log(err);
      //client.sendEmbed('#ff0000', 'Moderation', `Đã có lỗi xảy ra khi ban người này, có lẽ là do ||${err}||`, 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
    }
}
