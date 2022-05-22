(() => {

  /**
   * "Given a string, return true if it's a red fruit, false otherwise."
   * 
   * The function isRedFruit() takes a string as an argument and returns a boolean
   * @param {string} fruit - string - This is the parameter that we're passing into the function. It's
   * a string.
   * @returns true
   */
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela'];

    return redFruits.includes(fruit)
  }

  /**
   * It takes a color as a parameter and returns an array of fruits of that color
   * @param {fruitsColors} color - fruitsColors
   * @returns function getFruitsByColor(color: fruitsColors): string[] {
   *     const fruitsByColor = {
   *       red: ['manzana', 'fresa'],
   *       yellow: ['piña', 'banana'],
   *       purple: ['moras', 'uvas']
   *     };
   *     if (!Object.keys(fruitsBy
   */
  type fruitsColors = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: fruitsColors): string[] {

    // Option 1
    const fruitsByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas']
    };
    if (!Object.keys(fruitsByColor).includes(color)) throw Error('the color must be: red, yellow, purple');
    return fruitsByColor[color];

    // Option 2
    // switch (color) {
    //   case 'red':
    //     return ['manzana', 'fresa']
    //   case 'yellow':
    //     return ['piña', 'banana'];
    //   case 'purple':
    //     return ['moras', 'uvas']

    //   default:
    //     throw Error('the color must be: red, yellow, purple');
    // }
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';
    return 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() });
})();
