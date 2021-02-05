const Discord = require('discord.js');
const client = new Discord.Client();
const djsytdl = require("./");

client.login("TOKEN");

client.on("message", async message => {
    try {
        if (!message.guild) return;

        if (message.content.startsWith("!play")) {
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const args = message.content.split(" ").slice(1);
                const info = await djsytdl.play(connection, args.join(" "), "KEY"); // { title<String>: "some video title", channel<String>: "this is some channel", dispatcher<StreamDispatcher>: ... }
                info.dispatcher.on("finish", () => connection.disconnect()); // Leave channel when the song is finished.
                message.channel.send(`**Song Title:** *${info.title}*\n**Song Channel:** *${info.channel}*`);
            } else {
                message.reply("You need to join a voice channel first!");
            }
        }
    } catch(e) {
        console.log(e);
    }
});