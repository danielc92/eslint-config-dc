function outerFunction () {
   function innerFunction () {
      return 33;
   }
}

const res = 1 + 1;

const error = new Error();

let nums = [1,2,43]

let len = [...new  Set(nums)].length