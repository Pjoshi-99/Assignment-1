// ASSIGNMENT 1

// PROBLEM 3

// OPERATIONS ON ARRAY

let person = [
  {
    name: "mark",
    age: 30,
    salary: 20000,
    adress: "",
  },
  {
    name: "Jason",
    age: 32,
    salary: 40000,
    adress: "",
  },
  {
    name: "philip",
    age: 35,
    salary: 50000,
    adress: "",
  },
  {
    name: "quolam",
    age: 27,
    salary: 60000,
    adress: "",
  },
  {
    name: "quolam 4",
    age: 27,
    salary: 90000,
    adress: "",
  },
  {
    name: "quolam 1",
    age: 27,
    salary: 60000,
    adress: "",
  },
  {
    name: "quolam 2",
    age: 27,
    salary: 70000,
    adress: "",
  },
  {
    name: "quolam 5",
    age: 27,
    salary: 80000,
    adress: "",
  },
];

console.log(person);

// DISPLAYING ARRAY DATA ON WEBPAGE
function displayData() {
  var html = '<table id="myTable2">';
  let indexValue = 0;
  html += "<tr>";
  for (var j in person[0]) {
    html += '<th onclick="sortTable(' + indexValue + ')">' + j + "</th>";
    indexValue++;
  }
  html += "</tr>";
  for (var i = 0; i < person.length; i++) {
    html += "<tr>";
    for (var j in person[i]) {
      html += "<td>" + person[i][j] + "</td>";
    }
    html +=
      '<td><input type="button" value="Delete Row" onclick="deleteRow()"></td>';
    html += "</tr>";
  }
  html += "</table>";
  document.getElementById("container").innerHTML = html;
}

onload = displayData();

// FORM TO ADD ADDRESS

var newForm = '<form onsubmit="addAddress()">';
newForm += '<label for="dataTable">Add address for : </label>';
newForm += '<select name="dataTable" id="dataTable">';
newForm += '<option value="none">Select an Option</option>';
for (var j of person) {
  newForm += '<option value="' + j.name + '">' + j.name + "</option>";
}
newForm +=
  '</select><input type="text" id="addressData" name="Data" /><input type="submit" value="Submit" /></form>';
document.getElementById("formContainer").innerHTML = newForm;

// ADD ADDRESS KEY TO THE OBJECTS OF ARRAY

function addAddress() {
  event.preventDefault();
  let name = document.getElementById("dataTable").value;
  let address = document.getElementById("addressData").value;
  if (address == "") {
    alert("please enter address");
    return false;
  }
  person = person.map((obj) => {
    if (obj.name === name) {
      return { ...obj, adress: address };
    }

    return obj;
  });
  displayData();
}

// SORT THE ARRAY IN ASSENDING OR DESENDING ORDER
// BY NAME, AGE, SALARY

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



// SEARCH ELEMENT IN ARRAY BY
// NAME

function searchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable2");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// DELETE ROW

function deleteRow() {
  var td = event.target.parentNode;
  var tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}