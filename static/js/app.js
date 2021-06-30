// from data.js
//var data;
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

console.log("Hello There");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
Object.keys(tableData).forEach(key => console.log(key));

//tableData.forEach((UFOReport) => {
//  var row = tbody.append("tr");
//  Object.entries(UFOReport).forEach(([key, value]) => {
//    var cell = row.append("td");
//    cell.text(value);
 // });
//});

function runEnter() {
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  if (inputValue === "") {
    console.log("input value is blank");
    tableData.forEach((UFOReport) => {
      var row = tbody.append("tr");
      Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  else {
    console.log("input value is NOT blank");
    var rows = tbody.selectAll("tr").remove();
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
}