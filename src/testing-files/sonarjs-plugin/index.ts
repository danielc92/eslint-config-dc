

let arr = [1,2,3,4]

for (let index = 0; index < arr.length; index++) {
    
    return arr[index]
    
}

let identical =  1


if (identical === identical) {
    identical  = 54
}

function redundantJump(x) {
    if (x == 1) {
      console.log("x == 1");
      return; // Noncompliant
    }
  }

let boool = true

if (!(bool === true)) {
    return "a"
}

if (bool) {
    console.log("1")
    // ...
  } if (bool) {  // Noncompliant
    //...
    console.log("2")
  }

/*

sonarjs/no-one-iteration-loop
sonarjs/no-inverted-boolean-check
sonarjs/no-redundant-jump


*/