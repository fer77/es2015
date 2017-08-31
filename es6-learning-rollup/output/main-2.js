"use strict";

function defaultDiscountRate() {
    return .10;
}
// The default value doesn't have to be a primitive value it could be a function that gives us a default value.
function ApplyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();

    // function ApplyDiscount(cost, discount = .10) {
    // discount = discount || .10;// The default can be added to the arguments passed to the function.

    return cost - cost * discount;
}

// console.log(ApplyDiscount(100, .40));// 60
console.log(ApplyDiscount(100));