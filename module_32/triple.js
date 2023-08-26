// :: always use ===
// :: equal comparison doesn't work fo non-primitive
const first = [23, 44, 84];
const second = [23, 44, 84];

if (first[0] === second[0]) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// :: type coercion
// :: type conversion
