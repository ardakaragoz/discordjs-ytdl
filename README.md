# discordjs-ytdl

A Great NPM Module For Youtube Video DOwnloader with only keywords!!!
<br>

## Purpose of Module
<code>This module is a way to use ytdl-core but with this module you can search videos without inputting any url only with the keyword whatever you want! This module is for Discord Bots.</code>

> Rhino Inc. is a small company that was created by Arda Karagöz. Rhino Inc. contains Coding programs, Code Projects, Discord Bots etc. Rhino Inc. has small enviroment to know but its knowledge by others will be increase in next months.

> Arda Karagöz is a 15 year old Half Developer. I am from Turkey and I want to be a software engineer. I know a lot about JavaScript and Python and also I know C#, C++, Java, HTML and CSS. I am the founder of Rhino Inc. I created lots of projects but the bests are: Rhino Bot(About 800K Users 900 Guilds - The Most Useful Turkish Bot), rhino-api(This Module. Helps you in math problems and daily fun codes), MasterG Bot(A Great Private Discord Bot For Our Server), Mental Power Discord Bot Tutorial(It will go more than +40 Eps), Github Markdown Repo(Will be published in few weeks.) and more...

#### What is This?

**This is a module to make youtube downloader to mp3 files that can play on Discord Bots. This is a module for only bots but in future it will change. It's 3rd official module for Rhino Inc.**

<br>

### Topics
* [Create Variable](#create-variable)
* [A Simple Discord Bot](#a-simple-discord-bot)
* [Playing Music](#playing-music)
* [Getting Infos](#getting-infos)

<br>

IF You Want To Learn About This Module's Tutorial Go To [This Channel](https://www.youtube.com/channel/UCdJN1G13UswgVrnq0PyA5lA) And watch "Discord Bot Dersleri #22"

### Create Variable

For Creating Variable You Can Do This
```js
const play = require('discordjs-ytdl')
```

### A Simple Discord Bot

If You DON'T Know How to Make a Bot Click [This](https://www.youtube.com/watch?v=4w8Su0dRFAw)

For Example You Can Make A Music Command Like This:

```js
const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı

client.login('TOKEN')

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
try {
    if (!message.guild) return;

    if (message.content.startsWith('/play')) {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const args = message.content.split(' ').slice(1)
            const ytdl = require('ytdl-core')
            connection.play(ytdl(args.join(" ")))
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
} catch(e){
console.log(e)
}
});
```

**But You Can Only Enter URL**

### Playing Music

So first please get an Youtube API Key on https://console.developers.google.com/

So code is like this :)

```js
const connection = await message.member.voice.channel.join();
            const args = message.content.split(' ').slice(1)
            const play = require('discordjs-ytdl')
           play.play(connection, args.join(" "), 'API KEY')
```

### Getting Infos

You can get info about a video like this.

```js
let title = play.title(args.join(" "), 'API KEY')
title.then(titlee => message.channel.send('VIDEO NAME: ' + titlee))
```

> All FUNCTIONS

- <PLAY>.play(connection, keyword, api)
- <PLAY>.title(keyword, api)
- <PLAY>.channel(keyword, api)
- <PLAY>.id(keyword, api)


#### Support

You Can Write Me For Wantings And Complains By

>ahmetarda2006@hotmail.com.tr - via E-Mail
>`${FleeingRhino}`#1403 - via Discord
>Issues On Github https://github.com/ardakaragoz/discordjs-ytdl/

#### THANKS

Thanks for using my module in your PC. Have a nice day!

RHINO INC. INDUSTRY
