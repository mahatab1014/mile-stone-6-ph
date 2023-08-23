const glass = {
    name: "glass",
    color: "golden",
    price: 33,
    isCleaned: true,
}

// ===================================
const keys = Object.keys(glass);
const values = Object.values(glass);
// console.log(keys);
// console.log(values);



// ===============================================
const pair = Object.entries(glass);
// console.log(pair);

/**
 *** Array Of Array || two dimensional array
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 33 ],
  [ 'isCleaned', true ]
]
*/


// =====================================
// delete glass.isCleaned;
// console.log(glass);

// ==============================================
// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass)

// ===========================================
// Freeze
Object.freeze(glass);
glass.sourse = "Made in Bangladesh";
// console.log(glass)