const Discord = require("discord.js");

module.exports = (client, message) => {
    client.sendEmbed = (color, title, description, thumbnail, image) => {
        const embed = new Discord.MessageEmbed()
              .setColor(color)
              .setTitle(title)
              .setDescription(description)
              .setThumbnail(thumbnail)
              .setImage(image)
              .setTimestamp()
              .setFooter("Độc quyền bởi NobiRE VietNam")
        message.channel.send({embeds: [embed]})
    }
    const prefix = client.config.info.prefix.value;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()) || message.author.bot) return;
    const [command, ...args] = message.content.trim().slice(prefix.length).split(/\s+/);
    var cmd = client.commands.get(command);
    if (cmd) {
        if (cmd.config.accessible_by == "owner" && message.author.id != client.config.owner_id) return client.sendEmbed("#ff0000", "Error", "Bạn tuổi gì xài lệnh này :rolling_eyes:", "https://i.imgur.com/Ld1y87B.jpeg", "");
        if (!cmd.config.dm_supported && message.channel.type == "DM") return client.sendEmbed("#ff0000", "Error", "Lệnh này không được hỗ trợ DM", "https://i.imgur.com/Ld1y87B.jpeg", "");
        cmd.run(client, message, args);
    }
}
