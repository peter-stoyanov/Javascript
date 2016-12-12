function countLetter([word, letter]) {
    let count = 0;

    //inspect string as an array of chars

    for (let ch of word) {
        if (ch == letter) {
            count++;
        }
    }

    console.log(count);
}

countLetter(['hello', 'l']); // 2