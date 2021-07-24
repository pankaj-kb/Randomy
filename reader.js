var fs = require('fs');
fs.readFile('aboutnaval.txt', 'utf8', function(err, data){
      
    // Display the file content
    console.log(data);
});