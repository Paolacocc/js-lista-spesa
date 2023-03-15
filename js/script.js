// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


const shoppingList = ['pane', 'latte', 'frutta', 'cioccolata', 'farina'];
const ulList = document.querySelector(".list");

let i = 0;
let listItems = "";

while ( i < shoppingList.length) {
    console.log(shoppingList[i]);
    i++;
    listItems += `<li>${shoppingList[i]}</li>`;
}


ulList.innerHTML += listItems;