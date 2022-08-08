window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    
    function vld(name : string | null, asignee : string | null  , date : string | null){
        if(name?.trim() != "" && asignee?.trim() != "" && asignee !== "none" && date?.trim() != "")
        {
            return true;
        }

        return false;
    };
    enum status{
        in_progress = 0,
        completed = 1,
    };

    type task ={
        details : string;
        asignee : string;
        due_date : string;
        action : status;
        id : number;
    };

    let task_list : task[] =[];
    let index : number = 0;

    // creating a user lis
    let asignee_list : string[] = ["Chetan", "Abdul","Anubhav","Hari","Rakesh","Shibo","Jayesh","Rishabh","Rahul","Sarthak","Prabhjot"];
    const selectUser = document.getElementById("new-task-asignee") 
    function dropdown(users : string[]){
        for(let name of users){
            let n_option = document.createElement("option")
            n_option.value= name
            let user_name = document.createTextNode(name)
            n_option.appendChild(user_name)
            selectUser?.appendChild(n_option)
        }
    }

    dropdown(asignee_list)

    form?.addEventListener('submit', (e) =>{
        e.preventDefault();

        const n_task : HTMLInputElement = (document.getElementById("new-task-input") as HTMLInputElement)
        const n_asignee : HTMLInputElement= (document.getElementById("new-task-asignee")as HTMLInputElement);
        const n_due_date : HTMLInputElement= document.getElementById("new-task-due-date") as HTMLInputElement;
        //console.log(n_asignee.value)

        if(!vld(n_task.value,n_asignee.value,n_due_date.value))
        {
            alert("Please insert valid details");
            return;
        }

        let task_name = document.createTextNode(n_task.value)
        let task_asignee = document.createTextNode(n_asignee.value)
        let task_date = document.createTextNode(n_due_date.value)

        const new_task : task ={
            details : n_task.value,
            asignee: n_asignee.value,
            due_date : n_due_date.value,
            action : 0,
            id : index++,
        }

        task_list.push(new_task)

        let table = document.getElementById("in-progress-table") as HTMLTableElement;
        let row = table?.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        

        let table2 = document.getElementById("completed-table") as HTMLTableElement;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        
        cell1.appendChild(task_name);
        cell2.appendChild(task_asignee);
        cell3.appendChild(task_date);
        cell4.appendChild(checkbox);

        checkbox.addEventListener('click', (e) => {
            if(checkbox?.parentElement?.parentElement)
            {
                checkbox.parentElement.parentElement.remove();
            }
            let row = table2?.insertRow(1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.appendChild(task_name);
            cell2.appendChild(task_asignee);
            cell3.appendChild(task_date);

            task_list[new_task.id].action = 1;
            //console.log(task_list)
        });
        
        (document.getElementById("new-task-form") as HTMLFormElement)?.reset();

        //console.log(task_list)
    });
    
});

