<?php
if (!isset($argv[1])) {
  echo "No file provided.\n";
  exit(1);
}

$filepath = $argv[1];
$contents = explode("\n", file_get_contents($filepath));
$ages = [];
foreach ($contents as $line) {
  $age = explode(",", $line)[1];
  if (!isset($ages[$age])) {
    $ages[$age] = 0;
  }
  $ages[$age] += 1;
}

foreach ($ages as $age => $count) {
  echo "$age,$count\n";
}
