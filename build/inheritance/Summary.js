"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("../analyzer/WinsAnalysis");
// import { HtmlReporter } from '../reportTargets/HtmlReporter '
var ConsoleReporter_1 = require("../reportTargets/ConsoleReporter");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReporter_1.ConsoleReporter());
    };
    Summary.prototype.buildAndPrintReporter = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
