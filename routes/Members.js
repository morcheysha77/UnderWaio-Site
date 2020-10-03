const MEMBER = require("../discord/utils/Member");
const FILE = require("../discord/utils/File");

const DIR = __dirname + "/../public/json/\members.json";

server.get("/members", async (request, response) => {

    let content = await FILE.getFileContent(DIR);
    let forwardedIpsStr = request.connection.remoteAddress || request.headers['x-forwarded-for'];
    let ip = "";

    if (forwardedIpsStr) ip = forwardedIpsStr.split(',')[0]; 

    console.log(ip);

    response.render(
        "pages/members", 
        {
            Message_1: content["updown"][0],
            Message_2: content["updown"][1],
            Message_3: content["updown"][2],
            Message_4: content["updown"][3],
            Message_5: content["updown"][4],
            Leaders: MEMBER.memberDisplay("「Leader」"),
            ChefOfficiers: MEMBER.memberDisplay("╠UW╣ | Chefs-Officiers'🍀"),
            Officiers: MEMBER.memberDisplay("╠UW╣ | Officiers"),
            Members: MEMBER.memberDisplay("╠UW╣ | Membres"),
            MembersNG: MEMBER.memberDisplay("╠UW╣ | Membres NG🍀"),
        } 
    );
});