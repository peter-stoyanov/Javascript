function findConeDetails([radius, height]) {

    //Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.

    [radius, height] = [radius, height].map(Number);
    let s = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + s);

    return `volume = ${volume}\narea = ${area}`;
}

console.log(findConeDetails(['3', '5']));
// volume = 47.1238898038469
// area = 83.22976079115259