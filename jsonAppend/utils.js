const fs = require('fs');

function appendToFile(path, data) {
    fs.appendFile(path, '\n' + data, 'utf8', (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
};

module.exports = { appendToFile }