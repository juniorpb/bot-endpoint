const fs = require("fs");

function robot(nameProject, nameService){

    console.log("==== " + nameService + " ====");
    
    const endpointFiles = ["production", "development", "staging"];
    for(file = 0; file < 3; file ++){

        //  endpoint directory
        const data = fs.readFileSync(`../${nameProject}/backend/api/config/env/${endpointFiles[file]}.json`);
            
        // parse json to array
        const jsonData = JSON.parse(data);
        
        console.log(`${endpointFiles[file]}:\n${jsonData.soap[nameService]["endpoint"]}\n`);       
    }
}

module.exports = robot
