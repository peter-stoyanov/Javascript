function spyMaster (input){
    let sk = input.shift();

    let msgstring = input.join(' | ');
    let initialTextJoined = msgstring;
    let re = /\s[a-zA-Z]+\s+([!%$#A-Z]{8,})[\s\.,$]/g;
    let foundStrings = [];
    let msgFordecode = [];
    while ((myArray = re.exec(msgstring)) !== null) {
        let msg = 'Found ' + myArray[0];
        //msg += 'Next match starts at ' + myRe.lastIndex;
        //console.log(msg);
        foundStrings.push(myArray[0]);
    }
    for (let item of foundStrings) {
        let splitarr = item.split(/\s+/);
        msgFordecode.push(splitarr[2]);
    }

    let msgForreplace = [];
    for (let word of msgFordecode) {
        word = word.replace(/!/g, '1');
        word = word.replace(/%/g, '2');
        word = word.replace(/#/g, '3');
        word = word.replace(/\$/g, '4');
        word = word.toLowerCase();
        msgForreplace.push(word);
    }

    for (let i = 0; i < msgForreplace.length; i++) {
        initialTextJoined = initialTextJoined.replace(msgFordecode[i],msgForreplace[i]);

    }

    let msgForprint = initialTextJoined.split(' | ');
    for (let item of msgForprint) {
        console.log(item);
    }
}

spyMaster(['specialKey',
'In this text the specialKey HELLOWORLD! is correct, but',
'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']
    );
