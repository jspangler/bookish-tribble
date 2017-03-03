const filename = process.argv[2];
const fs = require('fs');

// if no file provided then don't proceed
if (!filename) {
  console.error('No file provided.');
  process.exit(1);
}

try {
  // attempt to read file
  const contents = fs.readFileSync(filename, 'utf8');

  // split on the new line
  const lines = contents.split('\n');
  const ages = {};

  // loop through each line to tally up ages
  lines.forEach(function(line) {
    const result = line.split(',');
    // age represents the 2nd index
    const age = result[1];
    ages[age] = ages[age] ? ages[age] + 1 : 1;
  });

  // loop through each key printing age and count
  Object.keys(ages).forEach(function(age) {
    console.log(age + ',' + ages[age]);
  });

  process.exit();
} catch (e) {
  console.error('Error reading file.');
  process.exit(1);
}
