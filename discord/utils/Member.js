const MEMBER_ROLES = [
    "「Leader」", "╠UW╣ | Chefs-Officiers'🍀", 
    "╠UW╣ | Officiers", "╠UW╣ | Membres", 
    "╠UW╣ | Membres NG🍀"
];

class Member {

    static memberList = {};

    static arrayClear(array, pseudo){
        let trash_can = "";

        if(!array) return false;

        for(let element in array){
            if(!array[element]) return false;

            for(let sub_array in array[element]){
                if(array[element][sub_array] == pseudo) return array[element].splice(sub_array, 1);
            }
        }
    }
    
    static memberUpdater(guild){
        if(!guild) return;

        memberList = {};

        guild.members.cache.forEach(member => {
            let validRoles = member.roles.cache.filter(role => MEMBER_ROLES.includes(role.name)).array();

            if(validRoles.length > 0){
                let theRole = validRoles.shift().name;

                if(!memberList[theRole]) memberList[theRole] = [];

                this.arrayClear(memberList, member.displayName);

                memberList[theRole].push(member.displayName);
            }         
        });
    }

    static memberDisplay(role){
        let text = "";

        if(!memberList[role]){
            text = "Aucun";
        } else {
            let count = memberList[role].length - 1;

            for(let sub_role in memberList[role]){
                if(count == sub_role){
                    text = text + memberList[role][sub_role];
                } else {
                    text = text + memberList[role][sub_role] + ", ";
                }
            }
        }

        if(!text) text = "Aucun";
        
        return text;
    }
}

module.exports = Member;