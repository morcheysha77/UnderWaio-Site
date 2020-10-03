const DISCORD = require("discord.js");
const EMBED = require("./utils/Embed");
const MEMBER = require("./utils/Member");
const FILE = require("./utils/File");

const BOT = new DISCORD.Client({fetchAllMembers: true});

const CMD_PREFIX = "!";
const PREFIX = "╠UW╣ | UnderWaio'🍀 ";
const Server_id = "699534905033359442";

BOT.login("NzU1ODE5ODU1OTgyMzYyNjI0.X2I2GA.F0sjiF3nv6YzFEnUHUpB9u_usLA");

BOT.on("ready", () => {
    BOT.user.setActivity(PREFIX + "is the best Discord : https://discord.gg/Y8t4ffK");

    console.log(BOT.user.username + " est en ligne !");

    // Start the member updater task :
    setInterval(() =>  MEMBER.memberUpdater(BOT.guilds.cache.get(Server_id)), 1);
});

BOT.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;

    var args = message.content.split(" ");
    var cmd = args.shift().substring(CMD_PREFIX.length).toLowerCase();

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    let msg = "";
    let error = "**" + PREFIX + "** " + "<@" + message.author.id + ">" + " **ERROR** la manipulation n'a pas fonctionné correctement !";
    let file = __dirname + "/../public/json/\members.json";
    let content = await FILE.getFileContent(file);

    switch(cmd){
        case "up":
            if(args.length === 2){

                msg = PREFIX + message.mentions.users.first().username + " a été uprank au rang de " + message.mentions.roles.first().name + " par " + message.author.username;

                if(content["updown"].length > 4) content["updown"].shift();

                content["updown"].push(msg)

                await FILE.writeFileContent(file, content);

                message.channel.send(
                    "**" + PREFIX + "** " + "<@" + message.mentions.users.first().id
                    + ">" + " a été uprank au rang de **" + message.mentions.roles.first().name 
                    + "**" + " par <@" + message.author.id + ">"
                );

                message.delete();
            } else {

                message.channel.send(EMBED.createEmbed(BOT, 'Command', "Syntaxe", "Usage: " + CMD_PREFIX + "up @member @new_role "));
                message.delete();
            }
        break;

        case "down":
            if(args.length === 2){

                msg = PREFIX + message.mentions.users.first().username + " a été derank au rang de " + message.mentions.roles.first().name + " par " + message.author.username;
                
                if(content["updown"].length > 4) content["updown"].shift();

                content["updown"].push(msg)

                await FILE.writeFileContent(file, content);

                message.channel.send(
                    "**" + PREFIX + "** " + "<@" + message.mentions.users.first().id 
                    + ">" + " a été derank au rang de **" + message.mentions.roles.first().name
                    + "**" + " par <@" + message.author.id + ">"
                );

                message.delete();
            } else {

                message.channel.send(EMBED.createEmbed(BOT, 'Command', "Syntaxe", "Usage: " + CMD_PREFIX + "down @member @new_role "));
                message.delete();
            }

            message.delete();
        break;

    }
});