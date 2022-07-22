const Discord = require("discord.js");

module.exports.config = {
    name: "gamerequirement",
    description: "Điều khoản về duyệt game",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#3333ff')
        .setTitle('Trợ Giúp')
        .addFields(
            {name: "Về cốt truyện", value: client.config.requirement.plot},
            {name: "Về cách chơi, hệ thống và tài nguyên game", value: client.config.requirement.system},
            {name: "Về đăng game và cách duyệt game", value: client.config.requirement.approval},
        )
        .setTimestamp()
        .setFooter("Độc quyền của NobiRE VietNam")
    message.channel.send({embeds: [embed]})
}
