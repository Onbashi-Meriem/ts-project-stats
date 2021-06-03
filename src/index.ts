// import { CsvFileReader } from './CsvFileReader'
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader'
import { ConsoleReporter } from './reportTargets/ConsoleReporter'
import { WinsAnalysis } from './analyzer/WinsAnalysis'
import { Summary } from './inheritance/Summary'


// const reader = new MatchReader('football.csv');
// reader.read();

//Create an object that satisfies the DateReader interfaces
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the DateReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Brighton'),
    new ConsoleReporter()
);
summary.buildAndPrintReporter(matchReader.matches)

const today = new Date();
console.log(today)


