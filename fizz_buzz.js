let numbers = [1,3,5,12,15,30,45]


for (let index = 0; index < numbers.length; index++) {
    let num = numbers[index]
    if (num % 3 === 0 && num % 5 === 0){ 
        console.log("fizzbuzz")
    }else if(num % 3 === 0){
        console.log("fizz")  
    }else if(num % 5 === 0){
        console.log("buzz")
    }else{
        console.log(num)
    }
}
