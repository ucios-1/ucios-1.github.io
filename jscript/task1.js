// tworzy tr i dodaje do tablicy
function tableCreation (table, i, num1, num2) {
        const tableRow = document.createElement("tr");
        const tableHead = document.createElement("th");
        const tableDataE = document.createElement("td");
        const tableDataO = document.createElement("td");
        table.appendChild(tableRow);
        tableRow.appendChild(tableHead);
        tableRow.appendChild(tableDataE);
        tableRow.appendChild(tableDataO);
        tableHead.innerHTML = i + 1;

        // dodajemy wartość tylko jeżeli num2 istnieje
        if(num1 !== undefined) {
            tableDataE.innerHTML = num1;
        }
        
        // dodajemy wartość tylko jeżeli num2 istnieje
        if(num2 !== undefined) {
            tableDataO.innerHTML = num2;
        }
}

function generator() {
    var numArray = [];
    var parzyste, nieparzyste;
    const table = document.getElementById("tableBody");

    // generuje 20 liczb losowych
    for (let i=0; i < 20; i++) {
        numArray.push(Math.floor((Math.random() * 100) + 1));
    }

    // sortójemy rosnąco
    function compareNumbers(a, b) {
        return a - b
     }
    numArray = numArray.sort(compareNumbers);

    //zwracamy parzyste liczby
    parzyste = numArray.filter(el => el % 2 === 0)

    //zwracamy nie parzyste liczby
    nieparzyste = numArray.filter(el => el % 2 !== 0)

    // usuwamy dane z poprzedniej tabeli dla ponownego wygenerowania liczb
    while (table.hasChildNodes()) {  
        table.removeChild(table.firstChild);
    }

    // sprawdzamy, która tablica jest dłuższa i w zależności od tego dostosujemy ilość powtórzeń dla pętli.
    if(parzyste.length >= nieparzyste.length) {
        for (let i = 0; i < parzyste.length; i++) {
            tableCreation(table, i, parzyste[i], nieparzyste[i]);
        }
    } else {
        for (let i = 0; i < nieparzyste.length; i++) {
            tableCreation(table, i, parzyste[i], nieparzyste[i]);
        }
    }
}