"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader'
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReporter_1 = require("./reportTargets/ConsoleReporter");
var WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
var Summary_1 = require("./inheritance/Summary");
// const reader = new MatchReader('football.csv');
// reader.read();
//Create an object that satisfies the DateReader interfaces
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the DateReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Brighton'), new ConsoleReporter_1.ConsoleReporter());
summary.buildAndPrintReporter(matchReader.matches);
var today = new Date();
console.log(today);
