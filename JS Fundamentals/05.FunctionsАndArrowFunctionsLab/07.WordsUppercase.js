function wordsToUppercase([text]) {

    //Write a JS program that extracts all words from a passed in string and converts them to upper case.
    // The extracted words in upper case must be printed back on a single line concatenated by “, “.
    return text
        .toUpperCase()
        .split(/[^\w]+/)
        .filter(w => w != '')
        .join(', ');
}

console.log(wordsToUppercase(['Hi, how are you?']));