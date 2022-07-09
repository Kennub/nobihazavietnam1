const Discord = require("discord.js");

module.exports.config = {
    name: "kick",
    description: "Đuổi Thành Viên",
    accessible_by: "members",
    dm_supported: false
}

module.exports.run = (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS))
      return client.sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");
    if (args.length === 0)
      return client.sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình kick ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
    const member = message.mentions.members.first();
    if (member) {
      member
        .kick()
        .then((member) => client.sendEmbed("#66ff33", "Moderation", `Tạm biệt ${member} nhé :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
        .catch((err) => client.sendEmbed("#ff0000", "Moderation", "Em chịu anh ơi :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
    } else {
      client.sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
    }
}