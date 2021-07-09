let numbers = [1,2,3,5,15,30,45]

for (let index = 0; index < numbers.length; index+=1) {
    let num = numbers[index]

    switch(true){
        case (num % 3 === 0 && num % 5 === 0):
            console.log("FizzBuzz")
            break;
        case (num % 3 === 0):
            console.log("Fizz")
            break;
        case (num % 5 === 0):
            console.log("Buzz")
            break;
        default:
            console.log("This number is not divisible by 3 or 5")
    }

}
