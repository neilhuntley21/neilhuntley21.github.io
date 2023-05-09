let person = [];
let salaries = []

document.getElementById("buttonAddSalary").addEventListener("click",addSalary)
document.getElementById("buttonDisplayResults").addEventListener("click",displayResults)
document.getElementById("buttonDisplaySalary").addEventListener("click",displaySalary)

let selectEmployee = document.getElementById("selectEmployee");
// alert(selectEmployee)
for (let index = 0; index < person.length; index++) {
    let item = document.createElement("option")
    item.text = person[index]
    // console.log(person[index])
    selectEmployee.add(item)
}
    
    


function addSalary(){
    let employeeName = document.getElementById("name").value;
    let employeeSalary = document.getElementById("salary").value;


    if(employeeName === "" || employeeSalary === ""){
        alert("Please enter something into the boxes. Both boxes cannot be empty")
    }
    if(isNaN(employeeSalary) == true){
        alert("Please make sure the value in the salary box is a number")
    }

    salaries.push(employeeSalary)
    person.push(employeeName)

    let item = document.createElement("option")

    item.text = employeeName

    selectEmployee.add(item)

    document.getElementById("name").value = ""
    document.getElementById("salary").value = ""
    document.getElementById("name").focus()
    // alert(salaries)

    
}
function displayResults(){
    let results = document.getElementById("results") 
    results.innerHTML = ""

    //uses .reduce to add together all of the salaries in the salaries array with a starting value of 0
    //divide by the length of the array
    let average = salaries.reduce((a,b)=> Math.round(a) + Math.round(b))
    average = average/salaries.length

    //... passes all the values as separate arguements.
    //similar to a for loop, only much less code
    let most = Math.max(...salaries)
    let resultHeading = document.createElement("h3")
    resultHeading.textContent = "Stats:"
    results.appendChild(resultHeading)

    let displayAverage = document.createElement("p")
    displayAverage.textContent = "Average pay: " + average
    results.appendChild(displayAverage)

    let displayHighest = document.createElement("p")
    displayHighest.textContent = "Highest pay: " + most
    results.appendChild(displayHighest)
}
function displaySalary(){
    let displayTable = document.getElementById("tableOfResults")

    for (let index = 0; index < person.length; index++) {
        let r = displayTable.insertRow(-1)
        let firstCol = r.insertCell(0)
        let secondCol = r.insertCell(1)
        firstCol.textContent = person[index]
        secondCol.textContent = salaries[index]
        
    }
}