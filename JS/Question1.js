
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // An empty array to store the reversed words
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = words[i].split('').reverse().join('');
        reversedWords.push(reversedWord);
    }

    return reversedWords;
}


let inputSentence = "Shivshankar Atmaram Bagal";
let reversedWords = reverseWordsInSentence(inputSentence);
console.log(reversedWords.join(' ')); 
