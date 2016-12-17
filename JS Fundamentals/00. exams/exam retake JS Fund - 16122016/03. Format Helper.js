function FormatHelper(input){
    "use strict";

    let corrected = input[0]
        //remove too many after spaces
        .replace(/\.\s{2,}/g, '. ')
        .replace(/,\s{2,}/g, ', ')
        .replace(/!\s{2,}/g, '! ')
        .replace(/\?\s{2,}/g, '? ')
        .replace(/:\s{2,}/g, ': ')
        .replace(/;\s{2,}/g, '; ');
    console.log('after too many spaces removal: ' + corrected);
        //insert one space after if missing
    corrected = corrected
        .replace(/(\.)((?=[^\s])\S?)/g, replacer3)
        .replace(/(,)((?=[^\s])\S?)/g, replacer3)
        .replace(/(!)((?=[^\s])\S?)/g, replacer3)
        .replace(/(\?)((?=[^\s])\S?)/g, replacer3)
        .replace(/(:)((?=[^\s])\S?)/g, replacer3)
        .replace(/(;)((?=[^\s])\S?)/g, replacer3);
    console.log('after insert one space: ' + corrected);
        //remove prepended spaces
    corrected = corrected
        .replace(/\s+\./g, '.')
        .replace(/\s+,/g, ',')
        .replace(/\s+!/g, '!')
        .replace(/\s+\?/g, '?')
        .replace(/\s+:/g, ':')
        .replace(/\s+;/g, ';');
    console.log('after remove prepended spaces: ' + corrected);
        //sequences
    corrected = corrected
        .replace(/\.\s+\.\s+\.\s+!/g, '...!');
    console.log('after sequences: ' + corrected);
        //fix dates
    corrected = corrected
        .replace(/(\.\s+)(\d+)/g, replacer1);
    console.log('after fix dates: ' + corrected);
        //fix quotes
    corrected = corrected
        .replace(/"\s+(.+)\s+"/g, replacer2);
    console.log('after quotes: ' + corrected);


    function replacer1(match,p1, p2){
        //console.log('found for dates: ' + match)
        return '.' + p2;
    }

    function replacer2(match,p1){
        //console.log('found for quotes: ' + match);
        p1 = p1.trim();
        return '"' + p1 + '"';
    }

    function replacer3(match,p1, p2){
        //console.log('found for quotes: ' + match);
        p1 = p1.trim();
        return p1 + ' ' + p2;
    }


    console.log(corrected);
}

//FormatHelper(['Make,sure .  15 to give:proper "  test   " spacing where is needed... !']);

//FormatHelper(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .']);

FormatHelper(['Make,sure to give:proper spacing where is needed... !']);