let dataAll = [];
let table;

function preload() {
    table = loadTable('data/myData.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        dataAll.push(table.rows[r].obj)
    }

     for (let i = 0; i < dataAll.length; i++) {
        dataAll[i].legendColour = int(dataAll[i].legendColour)
     }
}