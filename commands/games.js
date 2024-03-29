const Discord = require("discord.js");

module.exports.config = {
    name: "games",
    description: "Hỗ trợ về link game",
    accessible_by: "members",
    dm_supported: true
}

module.exports.run = (client, message, args) => {
    if (!args[0]) return client.sendEmbed('#ff0000', 'Trợ Giúp', 'Hãy thử `' + client.config.info.prefix.value + "games help`", 'https://i.imgur.com/Ld1y87B.jpeg', '')
    if (args[0] == "help") {
        var translated_games_text = "", indie_games_text = "", youtubers_games_text = "", coming_soon_games_text = "", i = 1;
        for (const key in client.config.games.translated_games) {
            translated_games_text += i + ". " + client.config.games.translated_games[key].name + ": `" + key + "`\n";
            i++;
        }
        i = 1;
        for (const key in client.config.games.indie_games) {
            indie_games_text += i + ". " + client.config.games.indie_games[key].name + ": `" + key + "`\n";
            i++;
        }
        i = 1;
        for (const key in client.config.games.youtubers_games) {
            youtubers_games_text += i + ". " + client.config.games.youtubers_games[key].name + ": `" + key + "`\n";
            i++;
        }
        i = 1;
        for (const key in client.config.games.coming_soon) {
            coming_soon_games_text += i + ". " + client.config.games.coming_soon[key].name + ": `" + key + "`\n";
            i++;
        }
        const embed = new Discord.MessageEmbed()
              .setColor('#3333ff')
              .setTitle('Trợ Giúp')
              .addFields(
                {name: "Game Việt Hoá", value: translated_games_text},
                {name: "Game Indie", value: indie_games_text},
                {name: "Dành Cho YouTubers", value: youtubers_games_text},
                {name: "Sắp ra mắt", value: coming_soon_games_text}
              )
              .setTimestamp()
              .setFooter("Độc quyền bởi NobiRE VietNam")
        message.channel.send({embeds: [embed]})
        return;
    }
    var game = client.config.games.translated_games[args.join(" ").toLowerCase()] || client.config.games.indie_games[args.join(" ").toLowerCase()] || client.config.games.youtubers_games[args.join(" ").toLowerCase()] || client.config.games.coming_soon[args.join(" ").toLowerCase()];
    if (!game) return client.sendEmbed('#ff0000', 'Trợ Giúp', 'Không tìm thấy game này rồi, bạn có nhập nhầm tên game không đấy? :frog:', 'https://i.imgur.com/Ld1y87B.jpeg', 'https://i.imgur.com/Ld1y87B.jpeg')
    client.sendEmbed('#66ff33', 'Trợ Giúp', '**Tác giả:** ' + '`' + game.author + '`' + '\n**Tình trạng:** ' + '`' + game.status + '`' + '\n**Link game:** ' + game.link + (game.additional_info ? ("\n" + game.additional_info) : ""), '', 'https://i.imgur.com/Ld1y87B.jpeg')
}
