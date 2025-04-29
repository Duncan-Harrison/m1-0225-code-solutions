interface ReportSolve {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

const rangeReport: ReportSolve = {
  total: 0,
  odds: [0],
  evens: [0],
  range: [0],
  average: 0,
};

function getRangeReport(start: number, end: number): ReportSolve {
  const range = [];
  const evens = [];
  const odds = [];
  let average: number = 0;
  let total: number = 0;
  for (let i = start; i <= end; i++) {
    range.push(i);
    total += i;
    average = total / range.length;
  }
  for (let e = 0; e < range.length; e++) {
    if (range[e] % 2 === 0) {
      evens.push(range[e]);
    } else {
      odds.push(range[e]);
    }
  }
  rangeReport.range = range;
  rangeReport.odds = odds;
  rangeReport.evens = evens;
  rangeReport.average = average;
  rangeReport.total = total;
  return rangeReport;
}

console.log(getRangeReport(1, 10));
