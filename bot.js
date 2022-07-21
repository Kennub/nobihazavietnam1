require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ],
    partials: ["CHANNEL"]
});
const fs = require("fs");
client.commands = new Map();
client.config = require("./config.json");

//Đọc các lệnh trong folder commands
const files = fs.readdirSync("./commands");
files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const name = file.split(".")[0];
    const cmd = require("./commands/" + name + ".js");
    if (cmd) client.commands.set(name, cmd);
    console.log("-Loaded command: " + name);
});

const events = fs.readdirSync("./events");
events.forEach(event => {
    if (!event.endsWith(".js")) return;
    const name = event.split(".")[0];
    const e = require("./events/" + name + ".js");
    if (e) client.on(name, e.bind(null, client));
    console.log("-Loaded event: " + name);
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
  });

client.login(process.env.DISCORDJS_BOT_TOKEN);
