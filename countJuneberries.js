function countJuneberries(bushRow, maxBerries) {
    let count = 0;

    for (let i = 0; i < bushRow.length; i++) {
        if (bushRow[i] === 'J') {
            count++;
            if (count === maxBerries) {
                return `Found ${count} Juneberries. Basket full!`;
            }
        }
    }

    return `Found ${count} Juneberries. Keep foraging!`;
}
