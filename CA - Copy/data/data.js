let dataAll = [];
let table;

function preload() {
    table = loadTable('data/myData.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        dataAll.push(table.rows[r].obj)
    }

    // for (let i = 0; i < data03.length; i++) {
    //     data03[i].Value = int(data03[i].Value)
    // }
}