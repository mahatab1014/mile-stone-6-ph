/*
Truthy:
1. true
2. any number (+ve, -ve) is truthy other than 0
3. any string is truthy other than empty string
4. '0'
5. {}
6. []
--------------------------------
Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/

let x = [];
if (x) {
  console.log("Value of x is truthy");
} else {
  console.log("Value of x is falsy");
}

// :: Optional --------------------
// :: check falsy
const y = null;
if(!y){
   console.log("value is falsy") 
}

// :: check truthy
const z = "MahTab";
if(!!z){
    console.log("Value is truthy")
}