const Discord = require("discord.js");

module.exports.config = {
    name: "ban",
    description: "Cấm Thành Viên",
    accessible_by: "members",
    dm_supported: false
}

module.exports.run = async (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS))
      return message.reply("Không phải admin mà đòi ban á :rolling_eyes:");
    if (args.length === 0) return message.reply("**Cho mị tên thằng đó đi**");
    try {
      const user = await message.mentions.members.first().ban();
      message.channel.send(`**Chào bạn ${member} nhé**`);
    } catch (err) {
      console.log(err);
      message.channel.send('Có một sự cố đã xảy ra. Có lẽ do đã có lỗi gì đó hoặc mị không đủ quyền để ban người này');
    }
}