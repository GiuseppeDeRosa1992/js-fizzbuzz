console.log("ciao Giuseppe")

let numberVariable = 1
//Creazione ciclo FOR
for (numberVariable = 1; numberVariable <=100; numberVariable++) {

    if (numberVariable % 3 == 0 && numberVariable % 5 == 0) {
        console.log(numberVariable,"FizzBuzz")
    } else if (numberVariable % 3 ==0) {
        console.log(numberVariable,"Fizz")
    } else if (numberVariable % 5 ==0) {
        console.log(numberVariable,"Buzz")
    } else {
        console.log(numberVariable)
    }    
}

//Ogni multiplo di 3 si chiama fizz
