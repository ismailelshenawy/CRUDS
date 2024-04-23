var name1 = document.getElementById("nameJ");
var age = document.getElementById("numJ");
var skills = document.getElementById("masJ");
//  var mainList = [];
var mainList;
if (localStorage.getItem("mainList") !== null) {
  mainList = JSON.parse(localStorage.getItem("mainList"));
  displaylist();
} else {
  mainList = [];
}
var tableBady = document.getElementById("tableDisplay");

function clickJ() {
  var listJs = {
    name: name1.value,
    age: Number(age.value),
    skills: skills.value,
  };
  // لتخزين الاراى
  mainList.push(listJs);
  localStorage.setItem("mainList", JSON.stringify(mainList));
  // لعرض الارارى

  displaylist();
}

function displaylist() {
  var tableJS = ``;
  for (let index = 0; index < mainList.length; index++) {
    tableJS += `
        <tr>
        <td scope="row"> ${index}</td>
        <td>${mainList[index].name}</td>
        <td>${mainList[index].age}</td>
        <td>${mainList[index].skills}</td>
        <td><button></button>delete</td>
        <td><button></button>edite</td>
      </tr>
        `;
  }
  tableBady.innerHTML = tableJS;
}
