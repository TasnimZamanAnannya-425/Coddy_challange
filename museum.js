function exploreMuseum(totalTime, exhibits, skipExhibits) {
  const visitedExhibits = [];
  let remainingTime = totalTime;

  for (let floor = 0; floor < exhibits.length; floor++) {
    for (let exhibit = 0; exhibit < exhibits[floor].length; exhibit++) {
      const currentExhibit = exhibits[floor][exhibit];

      if (skipExhibits.includes(currentExhibit)) {
        continue;
      }

      if (remainingTime < 30) {
        break;
      }

      visitedExhibits.push(currentExhibit);
      remainingTime -= 30;
    }

    if (remainingTime < 30) {
      break;
    }
  }

  return visitedExhibits;
}