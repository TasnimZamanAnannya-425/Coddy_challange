function herbGardenMystery(herbs, targetProbability) {
  const powerSet = (arr) => {
    return arr.reduce((subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ), [[]]);
  };

  const calculateProbability = (subset) => {
    return subset.reduce((prob, herb) => prob * herb.probability, 1);
  };

  const allSubsets = powerSet(herbs).slice(1); // Exclude empty subset

  const validSubsets = allSubsets.filter(subset => {
    return calculateProbability(subset) >= targetProbability;
  });

  return validSubsets.map(subset => {
    return subset.map(herb => herb.name).join(', ');
  });
}
