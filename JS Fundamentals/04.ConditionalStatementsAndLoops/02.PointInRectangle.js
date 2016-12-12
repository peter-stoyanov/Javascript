function isPointInsideRectangle(input) {

    //inside the rectangle or outside of it. If the point is at the rectangle border, it is considered inside.

    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);

    return x >= xMin && x <= xMax && y >= yMin && y <= yMax ? 'inside' : 'outside';
}