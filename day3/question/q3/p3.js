function addRow() {
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;

    if (name === "" || age === "") {
        alert("Please enter both Name and Age");
        return;
    }

    var table = document.getElementById("dataTable");

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = age;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        table.deleteRow(row.rowIndex);
    };

    cell3.appendChild(deleteBtn);
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
}
