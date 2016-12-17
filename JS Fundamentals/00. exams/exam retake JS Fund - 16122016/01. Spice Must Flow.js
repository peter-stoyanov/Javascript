function SpiceMustFlow(input) {
    let startYield = Number(input);
    let expectedYield = startYield;
    let totalExtraxted = 0;
    let days = 0;
    while (expectedYield >= 100) {
        totalExtraxted += expectedYield;
        totalExtraxted = totalExtraxted - 26;
        expectedYield = expectedYield - 10;
        days++;
    }
    if (totalExtraxted >= 26){
        totalExtraxted = totalExtraxted - 26;

    }
    console.log(days);
    console.log(totalExtraxted);
}

SpiceMustFlow('1');