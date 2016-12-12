function generateColorfulNumbers(number) {

    //Write a JS function to print the numbers from 1 to n.
    // Return a string holding HTML list with the odd lines in blue and even lines in green

    let html = '<ul>\n';
    for (let i = 1; i <= number; i++) {
        let color = 'blue';
        if (i % 2 != 0) color = 'green';
        html += `\t<li><span style='color: ${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    return html;
}
