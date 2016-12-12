function figureArea([w, h, W, H]) {

    //Write a JS function that calculates the area of the figure on the right by given
    // values for w, h, W and H. The lower right corner is always common for the two rectangles

    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}

figureArea(['13', '2', '5', '8']); // 56