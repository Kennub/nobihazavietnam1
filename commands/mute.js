const Discord = require("discord.js");
require("ms")

module.exports.config = {
    name: "mute",
    description: "Tắt Tiếng Thành Viên",
    accessible_by: "members",
    dm_supported: false
}



module.exports.run = (client, message, args) => {
    let time = args[1]
    const member = message.mentions.members.first();
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS))
      return client.sendEmbed("#ff0000", "Moderation", "Bạn tuổi gì xài lệnh này :rolling_eyes", "https://i.imgur.com/Ld1y87B.jpeg", "");

    if (args.length === 0)
      return client.sendEmbed("#ff0000", "Moderation", "Ủa vậy bạn bảo mình mute ai :frog:", "https://i.imgur.com/Ld1y87B.jpeg", "");
      if (!time){
        if (member) {
          const info = {
            name: member,
            muted: true
          }
          member
            .roles.add('953282221169594398')
            .then((member) => client.sendEmbed("#66ff33", "Moderation", `${member} đã bị khâu mồm :smile:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
            .catch((err) => client.sendEmbed("#ff0000", "Moderation", "Mình không đủ quyền hạn để làm việc này", "https://i.imgur.com/Ld1y87B.jpeg", ""));
        } else {
          client.sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
        }

    } else {
      const member = message.mentions.members.first();
      if (member) {
        member
          .roles.add('953282221169594398')
          .then((member) => client.sendEmbed("#66ff33", "Moderation", `${member} đã bị khâu mồm trong ${ms(ms(time))} :smile:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
        muted = true
        setTimeout(function(){
          member
            .roles.remove('953282221169594398')
            .then((member) => client.sendEmbed("#66ff33", "Moderation", `${member} đã được mở khóa mồm :smile:`, "https://i.imgur.com/Ld1y87B.jpeg", ""))
            .catch((err) => client.sendEmbed("#ff0000", "Moderation", "Mình không đủ thẩm quyền để khóa mõm người này :(", "https://i.imgur.com/Ld1y87B.jpeg", ""));
          muted = false
        }, ms(time))
      } else {
        client.sendEmbed("#ff0000", "Moderation", "Hình như người này không có trong server", "https://i.imgur.com/Ld1y87B.jpeg", "");
      }
    }
}
