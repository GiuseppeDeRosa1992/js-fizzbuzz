console.log("Ciao Giuseppe, che operzaione vuoi fare?");

//CREO VARIABILE NUMERICA
let number = 1;

//STAMPO IN CONSOLE I NUMERI DA 1 A 100

for (number; number <= 100; number++) {
    //CREO LISTA DEI NUMERI IN PAGINA HTML
    const listNumber = document.querySelector("div.row")
    //CREO UN NUOVO DIV SU JS DA INSERIRE NELL'HTML
    let newDiv = `<div class="col-3 dodger">${number}<div>`
    
    //PERò SE IL NUMERO è MULTIPLO DI 3 E 5 IL RISULTATO è FIZZBUZZ
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FIZZ BUZZ")
        //METTO IL DIV CHE HO CREATO IN PAGINA HTML SU TUTTI I FIZZBUZZ
        listNumber.innerHTML += `<div class="col-3 green">FIZZBUZZ<div>`
    }
    //SE INVECE IL RISULTATO è MULTIPLO DI 3 IL RISULTATO è FIZZ
    else if (number % 3 == 0) {
        console.log("FIZZ")
        //METTO IL DIV CHE HO CREATO IN PAGINA HTML SU TUTTI I FIZZ
        listNumber.innerHTML += `<div class="col-3 golden">FIZZ<div>`
    }
    //SE INVECE IL RISULTATO E MULTIPLO DI 5 IL RISULTATO è BUZZ
    else if (number % 5 == 0) {
        console.log("BUZZ")
        //METTO IL DIV CHE HO CREATO IN PAGINA HTML SU TUTTI I BUZZ
        listNumber.innerHTML += `<div class="col-3 crimson">BUZZ<div>`
    }
    //SE INVECE IL RISULTATO NON è NE MULTIPLO DI 3 CHE DI 5 IL RISULTATO è IL NUMERO
    else {
        console.log(number)
        //METTO IL DIV CHE HO CREATO IN PAGINA HTML SU TUTTI I NUMERI
        listNumber.innerHTML += newDiv
    }
};