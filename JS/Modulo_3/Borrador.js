function fizzBuzz(num) {
    if (num % 3 === 0) {
        console.log("F");
       return ("fizz");
    } else if (num % 5 === 0) {
        console.log("B");
       return ("buzz");
    } else if (num % 3===0 && num % 5===0) {
        console.log("FB");
       return ("fizzbuzz");
    } else {
       return (false);
    }
 }
 fizzBuzz(15)