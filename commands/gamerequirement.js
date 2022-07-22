const Discord = require("discord.js");

module.exports.config = {
    name: "gamerequirement",
    description: "Điều khoản về duyệt game",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message, args) => {
    if (!args) {
        var plot_text = client.config.gamerequirement.plot, system_text = client.config.gamerequirement.system, approval_text = client.config.gamerequirement.approval
        const embed = new Discord.MessageEmbed()
              .setColor('#3333ff')
              .setTitle('Trợ Giúp')
              .addFields(
                {name: "Về cốt truyện", value: plot_text},
                {name: "Về cách chơi, hệ thống và tài nguyên game", value: system_text},
                {name: "Về đăng game và cách duyệt game", value: approval_text},
              )
              .setTimestamp()
              .setFooter("Độc quyền của NobiRE VietNam")
        message.channel.send({embeds: [embed]})
        return;
    }
}
