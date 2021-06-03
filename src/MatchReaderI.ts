interface DataReader {
    read(): void;
    data: string[][];
}

class MatchReaderI {
    constructor(public reader: DataReader) { }
}