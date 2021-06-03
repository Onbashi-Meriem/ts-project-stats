"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader'
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResults_1 = require("./MatchResults");
// const reader = new MatchReader('football.csv');
// reader.read();
//Create an object that satisfies the DateReader interfaces
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the DateReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
var today = new Date();
console.log(today);
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] == MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] == MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchster United won " + manUnitedWins + " games");
