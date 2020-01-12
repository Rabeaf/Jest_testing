'use strict';

function fizzbuzz(num) {
  switch (0){
    case (num%105): return "fizzbuzzbang";
    case (num%35): return "buzzbang";
    case (num%21): return "fizzbang";
    case (num%15): return "fizzbuzz";
    case (num%7): return "bang";
    case (num%5): return "buzz";
    case (num%3): return "fizz";
    default: return num;
  }
}


module.exports = fizzbuzz;
