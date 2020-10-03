const DISCORD = require("discord.js");
const PREFIX = "╠UW╣ | UnderWaio'🍀 ";

class Embed {

    static createEmbed(BOT, title, subtitle, message){
        let embed = new DISCORD.MessageEmbed();
    
        embed.setTitle(title);
        embed.addField(subtitle + " :", message);
        embed.setThumbnail(BOT.user.avatarURL());
        embed.setColor("#7400FF");
        embed.setTimestamp();
        embed.setFooter(PREFIX + ' • 1.0.0');
    
        return embed;
    }
}

module.exports = Embed;