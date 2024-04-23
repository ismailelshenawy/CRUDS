var name1 = document.getElementById("nameJ");
var age = document.getElementById("numJ");
var skills = document.getElementById("masJ");
//  var mainList = [];
var tableBady = document.getElementById("tableDisplay");
var mainList;
if (localStorage.getItem("mainList") !== null) {
  mainList = JSON.parse(localStorage.getItem("mainList"));
  displaylist();
} else {
  mainList = [];
}

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
  //   var tableJS = ``;
  //   for (var iteam of mainList) {
  //     tableJS += `
  //         <tr>
  //         <td scope="row">1</td>
  //         <td>${iteam.name}</td>
  //         <td>${iteam.age}</td>
  //         <td>${iteam.skills}</td>
  //         <td><button></button>delete</td>
  //         <td><button></button>edite</td>
  //       </tr>
  //         `;
  //   }

  // tableBady.innerHTML = tableJS;

  // -------------------------------------

  var tableJS = ``;
  for (let index = 0; index < mainList.length; index++) {
    tableJS += `
        <tr>
        <td scope="row"> ${index}</td>
        <td>${mainList[index].name}</td>
        <td>${mainList[index].age}</td>
        <td>${mainList[index].skills}</td>
        <td><button onclick="delBtn(${index})" class="btn btn-danger">delete</button></td>
        <td><button class="btn btn-warning">edite</button></td>
      </tr>
        `;
  }
  tableBady.innerHTML = tableJS;
}

function delBtn(index) {
  console.log("hello");
  mainList.splice(index,1)
  displaylist();
}
