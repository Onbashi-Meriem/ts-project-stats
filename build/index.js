"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader'
var MatchReader_1 = require("./MatchReader");
var MatchResults_1 = require("./MatchResults");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var dateOfFristMatch = reader.data[0][0];
var manUnitedWins = 0;
var today = new Date();
console.log(today);
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] == MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] == MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchster United won " + manUnitedWins + " games");
