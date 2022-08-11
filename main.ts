window.addEventListener('load', ()=> {

    const form = document.querySelector("#new-task-form");
    
    function validate(name : string | null, asignee : string | null  , date : string | null){
        if(name?.trim() != "" /*&& asignee?.trim() != "" && asignee !== "none"*/ && date?.trim() != "")
        {
            return true;
        }

        if(name?.trim() == "")
        {
            validationMessage()
            return false;
        }

        return false;
    };

    enum Status{
        IN_PROGRESS = 0,
        COMPLETED = 1,
    };

    type Task ={
        details : string;
        asignee : string;
        dueDate : string;
        action : Status;
        id : number;
    };

    type Users = {
        name : string;
        email : string;
        id : number;
    }

    let taskList : Task[] =[];
    let index : number = 0;

    // creating a user list
    let asigneeList : Users[] = [
        {
            name : "Chetan",
            email : "chetan@d11.com",
            id: 1
        },
        {
            name : "Abdul",
            email : "abdul@d11.com",
            id: 2
        },
        {
            name : "Anubhv",
            email : "anubhv@d11.com",
            id: 3
        },
        {
            name : "Shibo",
            email : "shibo@d11.com",
            id: 4
        },
        {
            name : "Hari",
            email : "hari@d11.com",
            id: 5
        },
        {
            name : "Rakesh",
            email : "rakesh@d11.com",
            id: 6
        },
        {
            name : "Rishabh",
            email : "rishabh@d11.com",
            id: 7
        }
    ];


    const selectUser = document.getElementById("new-task-asignee") 
    function dropdown(users : Users[]){
        for(let user of users){
            let nOption = document.createElement("option")
            nOption.value= user.name
            let userName = document.createTextNode(user.name)
            nOption.appendChild(userName)
            selectUser?.appendChild(nOption)
        }
    }
    dropdown(asigneeList)

    function validationMessage(){
        let error : HTMLElement | null = document.getElementById("error")
        let errorMessage = document.createTextNode("Please enter valid details")
        error?.appendChild(errorMessage)
    }

    form?.addEventListener('submit', (e) =>{
        e.preventDefault();

        const nTask : HTMLInputElement = (document.getElementById("new-task-input") as HTMLInputElement)
        const nAsignee : HTMLInputElement= (document.getElementById("new-task-asignee")as HTMLInputElement);
        const nDueDate : HTMLInputElement= document.getElementById("new-task-due-date") as HTMLInputElement;
        //console.log(n_asignee.value)

        if(!validate(nTask.value,nAsignee.value,nDueDate.value))
        {
            //alert("Please insert valid details");
            return;
        }

        let taskName = document.createTextNode(nTask.value)
        let taskAsignee = document.createTextNode(nAsignee.value)
        let taskDate = document.createTextNode(nDueDate.value)

        const newTask : Task ={
            details : nTask.value,
            asignee: nAsignee.value,
            dueDate : nDueDate.value,
            action : 0,
            id : index++,
        }

        taskList.push(newTask)

        let table = document.getElementById("in-progress-table") as HTMLTableElement;
        let row = table?.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        

        let table2 = document.getElementById("completed-table") as HTMLTableElement;
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox")
        
        
        cell1.appendChild(taskName);
        cell2.appendChild(taskAsignee);
        cell3.appendChild(taskDate);
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

            cell1.appendChild(taskName);
            cell2.appendChild(taskAsignee);
            cell3.appendChild(taskDate);

            taskList[newTask.id].action = 1;
            //console.log(task_list)
        });
        
        (document.getElementById("new-task-form") as HTMLFormElement)?.reset();

        //console.log(task_list)
    });
    
});

