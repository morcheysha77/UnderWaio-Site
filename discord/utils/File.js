const FS = require("fs");

class File {

    /**
     * @param {string} path
     * @param {Object} data
     */
    static async writeFileContent(path, data){

        return FS.writeFileSync(path, JSON.stringify(data, null, 4));
    }

    /**
     * @param {string} path 
     * @returns {Object}
     */
    static async getFileContent(path){

        if(!FS.existsSync(path)) this.writeFileContent(path, {});

        return JSON.parse(FS.readFileSync(path, {encoding: "utf8"}));
    }
}

module.exports = File;