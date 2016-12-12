function distanceBetweenPoints([x1, y1, x2, y2])  {

    //Write a JS function that calculates the distance between two
    // points by given x and y coordinates. Use objects to store the two points.


    let pointA = {x:x1, y:y1};
    let pointB = {x:x2, y:y2};

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    return Math.sqrt(distanceX + distanceY);
}

distanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']); // 24.50778901186315