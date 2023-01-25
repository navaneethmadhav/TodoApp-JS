const t_task=document.getElementById('todo_task');
const add_btn=document.getElementById('btn_add');

const t_list=document.getElementById('todo_list');

const list_row=document.getElementById('list_row');

function todoList() {
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(table.rows.length);

    var todo_list=newRow.insertCell(0);

    todo_list.innerHTML = t_task.value;

    t_task.value="";

    // list_row.innerHTML = todo_list.value
}