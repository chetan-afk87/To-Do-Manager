window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const asignee = document.querySelector("#new-task-asignee");
    const due_date = document.querySelector("#new-task-due-date");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const n_task = input.value;
        const n_asignee = asignee.value;
        const n_due_date = due_date.value;

        let table = document.getElementById("in-progress-table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        

        let table2 = document.getElementById("completed-table");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        cell1.innerHTML = n_task;
        cell2.innerHTML = n_asignee;
        cell3.innerHTML = n_due_date;
        cell4.appendChild(checkbox);

        checkbox.addEventListener('click', (e) => {
            checkbox.parentElement.parentElement.remove();
            let row = table2.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerHTML = n_task;
            cell2.innerHTML = n_asignee;
            cell3.innerHTML = n_due_date;
            
        });
        document.getElementById("new-task-form").reset();
    });
});