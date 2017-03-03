<?php
if (!isset($argv[1])) {
  echo "No file provided.\n";
  exit(1);
}

$filepath = $argv[1];
$contents = @file_get_contents($filepath);
if (!$contents) {
  echo "Error reading file.\n";
  exit(1);
}

$lines = explode("\n", $contents);
$ages = [];
foreach ($lines as $line) {
  $age = explode(",", $line)[1];
  if (!isset($ages[$age])) {
    $ages[$age] = 0;
  }
  $ages[$age] += 1;
}

foreach ($ages as $age => $count) {
  echo "$age,$count\n";
}
