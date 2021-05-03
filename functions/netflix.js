const {exec} = require("child_process");

function getTitleById(id) {
    return new Promise(resolve => {
        exec(`nightwatch scraping.js --headless --netflix_id ${id}`, (error, stdout, stderr) => {
            const data = stdout
            const position = {
                start: data.indexOf("{"),
                end: data.indexOf("}"),
            }
            const context = data.substring(position.start, position.end + 1)
            const doc = JSON.parse(context)
            resolve(doc)
        });
    })
}

module.exports = {
    getTitleById
}
