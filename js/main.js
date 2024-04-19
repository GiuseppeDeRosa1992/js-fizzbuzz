console.log("ciao Giuseppe")

let numberVariable = 1
//Creazione ciclo FOR
for (numberVariable = 1; numberVariable <=100; numberVariable++) {

    //Creo div in pagina e gli do il valore dei numeri da 1 a 100
    let listNumber = document.querySelector("div.number")
        const div = `<div class="w-h-3 red">${numberVariable}</div>`;
    //Multipli di 3e5
    if (numberVariable % 3 == 0 && numberVariable % 5 == 0) {
        console.log(numberVariable,"FizzBuzz")
        //immetto in Pagina fizzbuzz ai multipli di 3e5
        listNumber.innerHTML += `<div class="w-h blue fs">Fizz <br> Buzz</div>`
    }
    //Multipli di 3  
        else if (numberVariable % 3 ==0) {
        console.log(numberVariable,"Fizz")
        //immetto in Pagina fizzbuzz ai multipli di 3
        listNumber.innerHTML += `<div class="w-h-3 green">Fizz</div>`
    } 
    //Multipli di 5
        else if (numberVariable % 5 ==0) {
        console.log(numberVariable,"Buzz")
        //immetto in Pagina fizzbuzz ai multipli di 5
        listNumber.innerHTML += `<div class="w-h-3 yellow">Buzz</div>`
    }
    //TuTTi gli altri Numeri  
        else {
        console.log(numberVariable)
        listNumber.innerHTML += div
    }
}        
