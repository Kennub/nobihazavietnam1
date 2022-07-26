const Discord = require("discord.js");

module.exports.config = {
    name: "help",
    description: "Trợ Giúp",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message, args) => {
    var text = "";
    client.commands.forEach(cmd => {
        text += "`" + client.config.bot_info.prefix.value + cmd.config.name + "`: " + cmd.config.description + "\n"
    })
    const embed = new Discord.MessageEmbed()
      .setColor('#3333ff')
      .setTitle('Trợ Giúp')
      .addFields(
        { name: 'Các lệnh của BOT', value: text }
      )
      .setTimestamp()
      .setFooter("Độc quyền bởi NobiRE VietNam")
    message.channel.send({embeds: [embed]})
}
