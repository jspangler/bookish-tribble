var filename = process.argv[2];
var fs = require('fs');

// if no file provided then don't proceed
if (!filename) {
  console.error('No file provided.');
  process.exit(1);
}

var ages = {};
var result;
var lines;

var contents = fs.readFileSync(filename, 'utf8');

// split on the new line
lines = contents.split('\n');

// loop through each line to tally up ages
lines.forEach(function(line) {
  result = line.split(',');
  // age represents the 2nd index
  var age = result[1];
  ages[age] = ages[age] ? ages[age] + 1 : 1;
});

// loop through each key printing age and count
Object.keys(ages).forEach(function(age) {
  console.log(age + ',' + ages[age]);
});

process.exit();
