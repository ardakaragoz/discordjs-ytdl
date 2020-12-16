const YOUTUBE = require('simple-youtube-api')
const domain = require('./utils/domain')
const log = require('./utils/log')
const ytdl = require('ytdl-core')

async function rhino(connection, keyword, key){
    if (!key) return log("You Didn't Write Your Youtube API Key.")
    let youtube = new YOUTUBE(key)
    var videos = await youtube.searchVideos(keyword, 1)
    const songInfo = await ytdl.getInfo(videos[0].url.replace(/<(.+)>/g, '$1'));
    const song = {
        id: songInfo.videoDetails.video_id,
        url: songInfo.videoDetails.video_url
    };

    const dispatcher = connection.play(ytdl(song.url, { filter: 'audioonly', volume: 0.5}))
    return dispatcher.setVolume(0.4)
}

async function title(keyword, key){
    if (!key) return log("You Didn't Write Your Youtube API Key.")
    let youtube = new YOUTUBE(key)
    var videos = await youtube.searchVideos(keyword, 1)
    return videos[0].title
}

async function channel(keyword, key) {
    if (!key) return log("You Didn't Write Your Youtube API Key.")
    let youtube = new YOUTUBE(key)
    var videos = await youtube.searchVideos(keyword, 1)
    return videos[0].channel.title
}

async function id(keyword, key) {
    if (!key) return log("You Didn't Write Your Youtube API Key.")
    let youtube = new YOUTUBE(key)
    var videos = await youtube.searchVideos(keyword, 1)
    return videos[0].id 
}

module.exports.play = rhino
module.exports.id = id 
module.exports.channel = channel 
module.exports.title = title  