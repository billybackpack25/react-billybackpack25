const fs = require('fs');           // Read/Write files
const utf8 = require('utf8');       // Decode utf8
const mkdirp = require('mkdirp')    // Creating directories

// Message and Reactions decode for emojis and quotation marks
function decode(text) {
    return utf8.decode(text)
}

// Write a file
function jsonWriter(data, filename) {
    const jsonString = JSON.stringify(data)
    fs.writeFile(filename, jsonString, err => {
        if (err) {
            console.error('Error writing file', err)
        } else {
            console.log(`Successfully wrote ${filename}`)
        }
    })
}

function getDayMonthYear(timestamp_ms) {
    // console.log(d.toISOString()) // 2021-08-08T13:36:14.650Z // ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()
    // console.log(d.toString()) // Sun Aug 08 2021 14:36:14 GMT+0100 (British Summer Time)
    const d = new Date(timestamp_ms)
    return {
        y: d.getFullYear(),
        m: (d.getMonth() + 1),
        d: d.getDate()
    }
}

/**
 * Get files in directory
 */
let types = '.json' // Only get JSON files
let dictForInfo = {}; // Save all data into a structured object
let dataMap = {};

/**
 * Read all the messages.json files
 * Create a new object with a year/month/day structure 
 * Deconstruct media in each entry
 */
fs.readdirSync(directory='./')
.filter(filename => filename.includes(types))
.forEach(file => {
    let fileData;
    try {
        // Try and read in the file
        fileData = fs.readFileSync(`${directory}${file}`, {encoding:'utf8', flag:'r'})
    } catch (err) {
        console.error(`Couldn't read file, ${directory}${file}`);
        console.error(err);
        process.exit(1)
    }
    let messages;
    try{
        // Try and parse the JSON file
        messages = JSON.parse(fileData.split("messages/inbox/genevievehasson_myub4q3hna/").join("/genevieve/")).messages
    } catch (err) {
        console.error('Couldn\'t parse JSON file');
        console.error(err);
        process.exit(2)
    }

    messages.forEach(entry => {
        // Get the day, month and year of the timestamp in the entry
        const {y, m, d} = getDayMonthYear(entry.timestamp_ms);
        
        try {
            // Sort out the media. If it exists just get the URL of the file
            if ('audio_files' in entry && entry.audio_files.length !== 0) entry.audio_files = entry.audio_files[0].uri
            if ('videos' in entry && entry.videos.length !== 0) entry.videos = entry.videos[0].uri
            if ('photos' in entry && entry.photos.length !== 0) entry.photos = entry.photos[0].uri
        } catch (err) {
            console.error(`Unable to process media. ${JSON.stringify(entry)}`)
        }

        if ( !(y in dictForInfo) ) {                    // If year not in dictionary
            dictForInfo[y] = {[m]:{[d]:[{entry}]}}      //      Add new year
            dataMap[y] = {[m]:[d]}                      //      Add entry into data map
            return                                      //      return
        } else {                                        // If year in dictionary
            if ( !(m in dictForInfo[y]) ) {             //      If month not in dictionary
                dictForInfo[y][m] = {[d]:[entry]}       //          Add new month   
                dataMap[y][m] = [d]                     //          Add entry into data map
                return                                  //          return
            } else {                                    // If month in dictionary
                if ( !(d in dictForInfo[y][m]) ) {      //      If day not in dictionary
                    dictForInfo[y][m][d] = [entry]      //          Add new day
                    dataMap[y][m].push(d)               //          Add entry into data map
                    return                              //          return 
                } else {                                // Day in directory
                    dictForInfo[y][m][d].push(entry)    //      Add day entry
                }
            }
        }
    });
})


/**
 * Create the folder structure 
 * Save all the new message.json files for each day
 */

const years = Object.keys(dictForInfo);                 // Get the years from the data into a list 
years.forEach(year => {                                 // For every year:
    mkdirp(`./${year}`).then(made =>                    //  Make a folder for that year
        console.log(made)                               //  Print out filename when complete
    )
    
    const months = Object.keys(dictForInfo[year])       // Get the months for every year
    months.forEach(month => {                           // For every month:
        mkdirp(`./${year}/${month}`).then(made =>       //  Make a folder for that month
            console.log(made)                           //  Print out filename when complete
        )

            const days =  Object.keys(dictForInfo[year][month])     // Get days of the month
            days.forEach(day => {                                   // For every day
                mkdirp(`./${year}/${month}/${day}`).then(made => {  // Create the messages file for each day
                    console.log(made);                              //  Print out filename when complete
                    jsonWriter(                                     //  Create the messages file for that day
                        dictForInfo[year][month][day],
                         `./${year}/${month}/${day}/messages.json`
                    );
                })
            });
    });
})

// Create a single file with a map of the data
// console.log(JSON.stringify(dataMap))

// Create the dataMap for all the message
jsonWriter(dataMap,`./dataMap.json`);