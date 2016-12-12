function composeTag([location, altText]) {

    //Write a JS function that composes an HTML image tag

    return `<img src="${location}" alt="${altText}">`;
}

console.log(composeTag(['smiley.gif', 'Smiley Face'])); // <img src="smiley.gif" alt="Smiley Face">