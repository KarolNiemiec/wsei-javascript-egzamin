const bigestSumOfTwoElements = array => {
    if (array.length === 1) {
        return array[0];
    }
    if (!array.length) {
        return false;
    } 
    return array.sort( ( a, b ) => {
        return b - a;
    } ).slice( 0, 2 ).reduce( ( a, b ) => {
        return a+b;
    }, 0 );
};
console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));