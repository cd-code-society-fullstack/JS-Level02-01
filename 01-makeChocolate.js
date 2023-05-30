const makeChocolate = (small, big, goal) => {
    let maxBig = Math.floor(goal / 5);
    if(maxBig <= big) {
        if(small >= (goal - maxBig * 5)) {
            return goal - maxBig * 5;
        }
    } else {
        if(small >= (goal - big * 5)) {
            return goal - big * 5;
        }
    }
    return -1;
}
module.exports = makeChocolate;