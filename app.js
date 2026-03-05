const fs = require("fs");
const readline = require("readline");

function checkSafe(report) {
  if (report.length < 2) return true;

  const isIncreasing = report
    .slice(1)
    .every((num, i) => num - report[i] > 0 && num - report[i] < 4);
  const isDecreasing = report
    .slice(1)
    .every((num, i) => report[i] - num > 0 && report[i] - num < 4);
  return isIncreasing || isDecreasing;
}

async function main() {
  let count = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream("input.txt"),
    crlfDelay: Infinity,
  });
  
  for await (const line of rl) {
    const report = line.split(" ").map(Number);
    const safe = checkSafe(report);
    count += safe ? 1 : 0;
    // console.log(`${report} ${safe ? "Safe" : "Unsafe"}`);
  }
  console.log(`Total safe reports: ${count}`);
}

main();
