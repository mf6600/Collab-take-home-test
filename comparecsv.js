const fs = require('fs');

function compare(csvNames) {
    if(!csvNames || csvNames.length <2) return "Please enter valid input files";
    var csvData = [];
    var discrepancy = [];
    var uniqueEmails = [];      
    for(var i=0; i<csvNames.length; i++){
        try {
            const data = fs.readFileSync(csvNames[i], 'utf8');
            csvData.push(csvJSON(data));
        } catch (err) {
            console.error(err)
        }
    }
    
    Object.entries(csvData[0]).forEach((entry) => {
        const [key, value] = entry;
        for(var j=1; j<csvData.length; j++){
            const entry2data = csvData[j][key];
            if(!(value["YouTube Channel"].includes(entry2data["YouTube Channel"])||
            entry2data["YouTube Channel"].includes(value["YouTube Channel"]) || 
            entry2data["Subscriber Count"]!==value["Subscriber Count"])){
                discrepancy.push(key);
                break;
            }
            else uniqueEmails.push(key);
        }
    });
    return discrepancy.length>0?discrepancy:uniqueEmails;
}

function csvJSON(csv){
    var lines=csv.split("\n");
    var result = {};
    var headers=lines[0].trim().split(",");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].trim().split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j].trim()] = currentline[j];
        }
        result[currentline[0]] = obj;
    }
    return result;
}
 
exports.compare = compare;