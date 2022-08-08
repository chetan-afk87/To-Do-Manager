window.addEventListener('load', function () {
    var form = document.querySelector("#new-task-form");
    function vld(name, asignee, date) {
        if ((name === null || name === void 0 ? void 0 : name.trim()) != "" && (asignee === null || asignee === void 0 ? void 0 : asignee.trim()) != "" && asignee !== "none" && (date === null || date === void 0 ? void 0 : date.trim()) != "") {
            return true;
        }
        return false;
    }
    ;
    var status;
    (function (status) {
        status[status["in_progress"] = 0] = "in_progress";
        status[status["completed"] = 1] = "completed";
    })(status || (status = {}));
    ;
    var task_list = [];
    var index = 0;
    // creating a user lis
    var asignee_list = ["Chetan", "Abdul", "Anubhav", "Hari", "Rakesh", "Shibo", "Jayesh", "Rishabh", "Rahul", "Sarthak", "Prabhjot"];
    var selectUser = document.getElementById("new-task-asignee");
    function dropdown(users) {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var name_1 = users_1[_i];
            var n_option = document.createElement("option");
            n_option.value = name_1;
            var user_name = document.createTextNode(name_1);
            n_option.appendChild(user_name);
            selectUser === null || selectUser === void 0 ? void 0 : selectUser.appendChild(n_option);
        }
    }
    dropdown(asignee_list);
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
        var _a;
        e.preventDefault();
        var n_task = document.getElementById("new-task-input");
        var n_asignee = document.getElementById("new-task-asignee");
        var n_due_date = document.getElementById("new-task-due-date");
        //console.log(n_asignee.value)
        if (!vld(n_task.value, n_asignee.value, n_due_date.value)) {
            alert("Please insert valid details");
            return;
        }
        var task_name = document.createTextNode(n_task.value);
        var task_asignee = document.createTextNode(n_asignee.value);
        var task_date = document.createTextNode(n_due_date.value);
        var new_task = {
            details: n_task.value,
            asignee: n_asignee.value,
            due_date: n_due_date.value,
            action: 0,
            id: index++
        };
        task_list.push(new_task);
        var table = document.getElementById("in-progress-table");
        var row = table === null || table === void 0 ? void 0 : table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var table2 = document.getElementById("completed-table");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        cell1.appendChild(task_name);
        cell2.appendChild(task_asignee);
        cell3.appendChild(task_date);
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
            cell1.appendChild(task_name);
            cell2.appendChild(task_asignee);
            cell3.appendChild(task_date);
            task_list[new_task.id].action = 1;
            //console.log(task_list)
        });
        (_a = document.getElementById("new-task-form")) === null || _a === void 0 ? void 0 : _a.reset();
        //console.log(task_list)
    });
});
