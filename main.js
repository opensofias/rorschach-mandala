// untested
const randomPattern = (x, y) => {
    const result = new Int8Array (x * y)
    let iter = 0
    while (iter < x * y) {
        result [iter] = Math.random () > .5
        iter++
    }
}

// todo: compares two patterns
const compare = (pattern1, pattern2) => {}

// todo: symmery transforms
const sym = {
    hFlip : (pattern, x, y) => {
        // todo
    },
    vFlip : (pattern, x, y) => {
        // todo
    },
    xySwap : (pattern, x, y) => {
        // todo
    },
    halfRot : (pattern, x, y) => {
        // todo
    },
    quarterRot: (pattern, x, y) => {
        // todo
    },
    hHalfPush: (pattern, x, y) => {
        // todo
    },
    hQuarterPush: (pattern, x, y) => {
        // todo
    },
    vHalfPush: (pattern, x, y) => {
        // todo
    },
    vQuarterPush: (pattern, x, y) => {
        // todo
    },
}

// todo: mutate functions

// todo: attractor/repulsor loop

// todo: renderer