const Discord = require("discord.js");

module.exports.config = {
    name: "info",
    description: "Xem thông tin về BOT",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message, args) => {
    var information = "", i = 1;
        for (const key in client.config.bot_info) {
            information += i + ". " + client.config.bot_info[key].name + ": `" + client.config.bot_info[key].value + "`\n";
            i++;
        }
    const embed = new Discord.MessageEmbed()
        .setColor('#3333ff')
        .setTitle('Trợ Giúp')
        .addFields(
            {name: "Thông tin BOT", value: information}
        )
        .setTimestamp()
        .setFooter("NobiRE VietNam all right reserved")
        message.channel.send({embeds: [embed]})
        return;
}
