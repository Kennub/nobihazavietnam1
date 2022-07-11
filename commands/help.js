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
        text += "`" + client.config.prefix + cmd.config.name + "`: " + cmd.config.description + "\n"
    })
    const embed = new Discord.MessageEmbed()
      .setColor('#3333ff')
      .setTitle('Trợ Giúp')
      .setDescription('Một số lệnh')
      .setThumbnail("https://i.imgur.com/Ld1y87B.jpeg")
      .addFields(
        { name: 'Một số lệnh', value: text }
      )
      .setTimestamp()
    message.channel.send({embeds: [embed]})
}
