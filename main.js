window.addEventListener('load', function () {
    var form = document.querySelector("#new-task-form");
    function validate(name, asignee, date) {
        if ((name === null || name === void 0 ? void 0 : name.trim()) != "" /*&& asignee?.trim() != "" && asignee !== "none"*/ && (date === null || date === void 0 ? void 0 : date.trim()) != "") {
            return true;
        }
        if ((name === null || name === void 0 ? void 0 : name.trim()) == "") {
            validationMessage();
            return false;
        }
        return false;
    }
    ;
    var Status;
    (function (Status) {
        Status[Status["IN_PROGRESS"] = 0] = "IN_PROGRESS";
        Status[Status["COMPLETED"] = 1] = "COMPLETED";
    })(Status || (Status = {}));
    ;
    var taskList = [];
    var index = 0;
    // creating a user list
    var asigneeList = [
        {
            name: "Chetan",
            email: "chetan@d11.com",
            id: 1
        },
        {
            name: "Abdul",
            email: "abdul@d11.com",
            id: 2
        },
        {
            name: "Anubhv",
            email: "anubhv@d11.com",
            id: 3
        },
        {
            name: "Shibo",
            email: "shibo@d11.com",
            id: 4
        },
        {
            name: "Hari",
            email: "hari@d11.com",
            id: 5
        },
        {
            name: "Rakesh",
            email: "rakesh@d11.com",
            id: 6
        },
        {
            name: "Rishabh",
            email: "rishabh@d11.com",
            id: 7
        }
    ];
    var selectUser = document.getElementById("new-task-asignee");
    function dropdown(users) {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var nOption = document.createElement("option");
            nOption.value = user.name;
            var userName = document.createTextNode(user.name);
            nOption.appendChild(userName);
            selectUser === null || selectUser === void 0 ? void 0 : selectUser.appendChild(nOption);
        }
    }
    dropdown(asigneeList);
    function validationMessage() {
        var error = document.getElementById("error");
        var errorMessage = document.createTextNode("Please enter valid details");
        error === null || error === void 0 ? void 0 : error.appendChild(errorMessage);
    }
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
        var _a;
        e.preventDefault();
        var nTask = document.getElementById("new-task-input");
        var nAsignee = document.getElementById("new-task-asignee");
        var nDueDate = document.getElementById("new-task-due-date");
        //console.log(n_asignee.value)
        if (!validate(nTask.value, nAsignee.value, nDueDate.value)) {
            //alert("Please insert valid details");
            return;
        }
        var taskName = document.createTextNode(nTask.value);
        var taskAsignee = document.createTextNode(nAsignee.value);
        var taskDate = document.createTextNode(nDueDate.value);
        var newTask = {
            details: nTask.value,
            asignee: nAsignee.value,
            dueDate: nDueDate.value,
            action: 0,
            id: index++
        };
        taskList.push(newTask);
        var table = document.getElementById("in-progress-table");
        var row = table === null || table === void 0 ? void 0 : table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var table2 = document.getElementById("completed-table");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        cell1.appendChild(taskName);
        cell2.appendChild(taskAsignee);
        cell3.appendChild(taskDate);
        cell4.appendChild(checkbox);
        checkbox.addEventListener('click', function (e) {
            var _a;
            if ((_a = checkbox === null || checkbox === void 0 ? void 0 : checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) {
                checkbox.parentElement.parentElement.remove();
            }
            var row = table2 === null || table2 === void 0 ? void 0 : table2.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.appendChild(taskName);
            cell2.appendChild(taskAsignee);
            cell3.appendChild(taskDate);
            taskList[newTask.id].action = 1;
            //console.log(task_list)
        });
        (_a = document.getElementById("new-task-form")) === null || _a === void 0 ? void 0 : _a.reset();
        //console.log(task_list)
    });
});
