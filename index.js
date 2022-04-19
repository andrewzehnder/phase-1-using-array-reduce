const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// function assembledBatteries(batteryBatches, reducer, init) {
//     let totalBatteries = init;
//     for (const battery of batteryBatches) {
//         totalBatteries = reducer(accum, battery);
//     }
//     return totalBatteries;
// }

const totalBatteries = batteryBatches.reduce((batteries, totalNumber) => batteries += totalNumber, 0);