function checkSafe(report) {
  if (report.length < 2) return true;
  
  const isIncreasing = report.slice(1).every(
    (num, i) => num - report[i] > 0 && num - report[i] < 4
  );
  const isDecreasing = report.slice(1).every(
    (num, i) => report[i] - num > 0 && report[i] - num < 4
  );
  return isIncreasing || isDecreasing;
}

function main() {
  const reports = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  reports.forEach(report => {
    const safe = checkSafe(report);
    console.log(`${report} ${safe ? 'Safe' : 'Unsafe'}`);
  });
}

main();
