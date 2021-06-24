/*
Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

//devo stampare a schermo un messaggio all'interno di un h1 utilizzando i data

//Inanzitutto ci serve prima un'h1 nell'HTML
//poi ci servirà un div che ci permetta di creare uno scoop all'interno del nostro codice html nella quale inseriremo i nostri data

//ISTANZIAMENTO DI VUE
const app = new Vue (  //avviamo vue
    {
        el: '#app', //Dichiarazione del container su cui andremo a lavorare (#app è il root del container)
        data:{  
            text: 'CIAO QUESTO è IL TITOLO PRINCIPALE' //Dichiarazione key:data
        }
    })




