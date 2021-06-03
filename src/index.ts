// import { CsvFileReader } from './CsvFileReader'
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResults'

// const reader = new MatchReader('football.csv');
// reader.read();

//Create an object that satisfies the DateReader interfaces
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the DateReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();



let manUnitedWins = 0;

const today = new Date();
console.log(today)



for (let match of matchReader.matches) {

    if (match[1] === 'Man United' && match[5] == MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] == MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchster United won ${manUnitedWins} games`)