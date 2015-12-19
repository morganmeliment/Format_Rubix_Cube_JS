var rubix = [[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]];
var linesToPrint = { 1: "      ", 2: "      ", 3: "      ", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "      ", 10: "      ", 11: "      ",};
for (var minifacetop = 0; minifacetop < 9; minifacetop++) {
    lineNum = ((minifacetop - (minifacetop % 3)) / 3) + 1;
    linesToPrint[lineNum] = linesToPrint[lineNum] + rubix[0][lineNum - 1][minifacetop % 3];
}
for (var minifacebottom = 0; minifacebottom < 9; minifacebottom++) {
    lineNum = ((minifacebottom - (minifacebottom % 3)) / 3) + 1;
    linesToPrint[lineNum + 8] = linesToPrint[lineNum + 8] + rubix[5][lineNum - 1][minifacebottom % 3];
}
var bracket = 0;
var lineToUse = 0;
var space = "";
for (var itr = 0; itr < 36; itr++) {
    lineNum = ((itr - (itr % 12)) / 12) + 5;
    bracket = ((itr % 12) - (itr % 3)) / 3 + 1;
    lineToUse = lineNum - 5;
    if ((itr + 1) % 3 === 0) {
        space = "   ";
    } else {
        space = "";
    }
    linesToPrint[lineNum] = linesToPrint[lineNum] + rubix[bracket][lineToUse][itr % 3] + space;
}

for (var linePrint = 0; linePrint < 11; linePrint++) {
    console.log(linesToPrint[linePrint + 1])
}
