//With XML
// $.ajax({
//   url: "Data/Documents.xml",
//   success: function (res) {
//     let data = res.querySelectorAll("Emp");
//     for (let x of data) {
//       $("#accordion").append(`
//         <h3>${$(x).find("Name").text()}</h3>
//         <div>
//           <ul>
//             <li>id: ${$(x).find("id").text()}</li>
//             <li>age: ${$(x).find("age").text()}</li>
//             <li>role: ${$(x).find("role").text()}</li>
//           </ul>
//         </div>`);
//     }
//     $("#accordion").accordion();
//   },
// });

//With JSON
$.ajax({
  url: "Data/DataObject.json",
  success: function (res) {
    for (let x of res.students) {
      $("#accordion").append(`
        <h3>${x.Name}</h3>
        <div>
          <ul>
            <li>id: ${x.id}</li>
            <li>age: ${x.Age}</li>
          </ul>
        </div>`);
    }
    $("#accordion").accordion();
  },
});
