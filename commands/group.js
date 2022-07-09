const Discord = require("discord.js");

module.exports.config = {
    name: "group",
    description: "Gửi Link Group",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message, args) => {
    client.sendEmbed('#0099ff', 'Link Group', 'Link group nè: https://www.facebook.com/groups/nobihazavietnam', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
}