"use strict";
function main3(data) {
    let t = parseInt(data[0]);
    for (var index = 1; index <= t; index++) {
        let line = data[index];
        let sum = 0;
        for (var j = 0; j < line.length; j++) {
            sum += isVocal(line.charAt(j));
        }
        process.stdout.write(sum + "\n");
    }
}
var stdin_input = "";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (input) => {
    stdin_input += input;
});
process.stdin.on("end", () => {
    main3(stdin_input.split("\n"));
});
function isVocal(char) {
    switch (char) {
        case 'A':
            return 1;
        case 'E':
            return 1;
        case 'I':
            return 1;
        case 'O':
            return 1;
        case 'U':
            return 1;
        case 'a':
            return 1;
        case 'e':
            return 1;
        case 'i':
            return 1;
        case 'o':
            return 1;
        case 'u':
            return 1;
        default:
            return 0;
    }
}
