function max(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
}
console.log(max([1, 2, 4, 5])); // expected output: 5 
console.log(max([5, 2, 7, 1, 6])); // expected output: 7