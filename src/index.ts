// import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResults'

const reader = new MatchReader('football.csv');
reader.read();

const dateOfFristMatch = reader.data[0][0];

let manUnitedWins = 0;

const today = new Date();
console.log(today)



for (let match of reader.data) {

    if (match[1] === 'Man United' && match[5] == MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] == MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchster United won ${manUnitedWins} games`)