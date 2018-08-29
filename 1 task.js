function addBook() {
    var arrInputs = document.getElementsByTagName('input');
    var curTable = document.querySelectorAll('#listBooks > tbody')[0];
    var newrange = document.createElement("tr");
    var namebook= curTable.querySelectorAll("tr>td");
    let i;
    for (i=0; i<namebook.length; i+=4)
    {
        if(namebook[i].innerHTML==arrInputs[0].value){
            alert("Такая книга уже есть");
            return;
        }
    }
    for (i=0; i<4; i++)
    {

        let newCol = document.createElement('td');
        newCol.innerHTML = arrInputs[i].value;
        newrange.appendChild(newCol);
    }
    curTable.appendChild(newrange);

}

function deleteBook() {
    var curTable = document.querySelectorAll('#listBooks > tbody')[0];
    var lastRow = curTable.querySelectorAll("tr");
    curTable.removeChild(lastRow[lastRow.length-1]);
}

function findElem() {
    var arr = document.getElementById('listBooks').querySelectorAll('tbody > tr > td');
    var findBook = document.getElementById('name');
    for (var i = 0; i < arr.length; i += 4) {
        if (arr[i].innerHTML == findBook.value) {
            alert("Книга найдена");
        }
    }
}



function sortP() {
    var  tableforsort = document.getElementById('listBooks');
    var tbodyfirst = tableforsort.getElementsByTagName('tbody')[0];
    var namesOfFields = ["Название:  ", "Автор:  ", "Издательство:  ", "Год издания:  "];
    var  mass= document.querySelectorAll('table > thead > tr > th');
    var ff=document.getElementById('selected').value;
    var colNum;
    switch (ff)
    {
        case 'name':
            colNum=0;
            break;
        case 'author':
            colNum=1;
            break;
        case 'year':
            colNum=2;
            break;
        case'publisher':
            colNum=3;
            break;
    }
    var rowsArray = [].slice.call(tbodyfirst.rows);
    var zamena;
    var atr=document.getElementById('select').value;
    switch (atr) {
        case '<':
            zamena = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML;
            };
            break;
        case '>':
            zamena = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
            };
            break;

    }
    rowsArray.sort(zamena);
    tableforsort .removeChild(tbodyfirst);
    for (var i = 0; i < rowsArray.length; i++) {
        tbodyfirst.appendChild(rowsArray[i]);
    }
    tableforsort .appendChild(tbodyfirst);
}