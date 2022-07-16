const Discord = require("discord.js");

module.exports.config = {
    name: "unmute",
    description: "Bỏ Tắt Tiếng Thành Viên",
    accessible_by: "members",
    dm_supported: false
}

module.exports.run = (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS))
      return client.sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");
    if (args.length === 0)
      return client.sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình mute ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
    const allowedRole = message.guild.roles.find("name", "Học Sinh Bị Kỉ Luật")
    const member = message.mentions.members.roles.has(allowedRole.id);
    if (muted == true){
      if (member) {
        member
          .roles.remove('953282221169594398')
          .then((member) => client.sendEmbed("#66ff33", "Moderation", `${member} đã được mở khóa mồm :moyai:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
          .catch((err) => client.sendEmbed("#ff0000", "Moderation", "Em chịu anh ơi :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
        muted = false
      } else {
        client.sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
      }
    } else {
      const member = message.mentions.members.first();
      client.sendEmbed("#ff0000", "Moderation", `${member} hiện đang không bị khóa mõm`, "https://i.imgur.com/Ld1y87B.jpeg", "")
    }
}
