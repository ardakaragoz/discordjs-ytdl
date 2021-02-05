const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı

client.login('TOKEN')

client.on('message', async message => {
    try {
        if (!message.guild) return;

        if (message.content.startsWith('/play')) {
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const args = message.content.split(' ').slice(1)
                const play = require('./index')
                play.play(connection, args.join(" "), "KEY")
                const başlık = play.title(args.join(" "), "KEY")
                başlık.then(title => message.channel.send(title))
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }
    } catch(e) {
        console.log(e)
    }
});