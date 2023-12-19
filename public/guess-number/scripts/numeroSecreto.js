const generateSecretNumber = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { generateSecretNumber };
