console.log("ciao Giuseppe")

let numberVariable = 1
//Creazione ciclo FOR
for (numberVariable = 1; numberVariable <=100; numberVariable++) {

    //Multipli di 3e5
    if (numberVariable % 3 == 0 && numberVariable % 5 == 0) {
        console.log(numberVariable,"FizzBuzz")
    }
    //Multipli di 3  
        else if (numberVariable % 3 ==0) {
        console.log(numberVariable,"Fizz")
    } 
    //Multipli di 5
        else if (numberVariable % 5 ==0) {
        console.log(numberVariable,"Buzz")
    }
    //TuTTi gli altri Numeri  
        else {
        console.log(numberVariable)
        
    }
    //Creo div in pagina e gli do il valore dei numeri da 1 a 100
    let listNumber = document.querySelector("div.number")
        const div = `<div>${numberVariable}</div>`;
        listNumber.innerHTML += div
}        
