import { OutputTarget } from '../inheritance/Summary'

export class ConsoleReporter implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }

}