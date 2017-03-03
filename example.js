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

lines.map(function(line) {
  result = line.split(',');
  var age = result[1];
  ages[age] = ages[age] ? ages[age] + 1 : 1;
});

Object.keys(ages).map(function(age) {
  console.log(age + ',' + ages[age]);
});

process.exit();
