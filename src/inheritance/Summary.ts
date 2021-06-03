import { WinsAnalysis } from '../analyzer/WinsAnalysis'
// import { HtmlReporter } from '../reportTargets/HtmlReporter '
import { ConsoleReporter } from '../reportTargets/ConsoleReporter'
import { MatchData } from "../MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;

}
export interface OutputTarget {
    print(report: string): void;
}
export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new ConsoleReporter()

        )
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    buildAndPrintReporter(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
