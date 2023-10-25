function countNumbers(arr) {
    const countMap = {};
    
    // Iterate through the array and count occurrences of each number
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    }

    // Convert the count map into a formatted output string
    const output = Object.keys(countMap).map(key => `${key}:${countMap[key]}`).join(', ');

    return output;
}

const inputArray = [ 4, 5, 4, 1, 2, 2, 3, 4];
const result = countNumbers(inputArray);
console.log(result);
