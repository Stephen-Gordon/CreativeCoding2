let dataAll = [];
let dataSmall = [];
let table;
let smallTable;

function preload() {
    table = loadTable('data/myData.csv', 'csv', 'header');
    smallTable = loadTable('data/myDataSmall.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        dataAll.push(table.rows[r].obj)
    }

    for (let r = 0; r < smallTable.getRowCount(); r++) {
        dataSmall.push(table.rows[r].obj)
    }

     
}