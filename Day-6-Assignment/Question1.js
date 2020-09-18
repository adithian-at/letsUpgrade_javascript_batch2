let employees =[
    {
        name : "Adi",
        age: 24,
        city: "Trichy",
        salary : 87500
    },
    {
        name : "Anisha",
        age: 30,
        city: "Bathrachalam",
        salary : 35000
    },
    {
        name : "Gayathri",
        age: 26,
        city: "Vellore",
        salary : 60000
    },
    {
        name : "Sarathichithran",
        age: 27,
        city: "Namakal",
        salary : 30000
    },
    {
        name : "Akilan",
        age: 25,
        city: "Chennai",
        salary : 40000
    }
];


function display(inarray)
{
    let tabledata ="";
    
    inarray.forEach(function(employee,index)
    {
        let currentrow = `<tr>
        <td>${index +1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td><button type="submit" onclick="deleteEmployee(${index})">Delete</button></td>
        </tr>
        `;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;

}

display(employees);

function searchbyName()
{
    let searchvalue = document.getElementById("searchparam").value;
    
    let filteredemployees = employees.filter(function(employee)
    {
        return ((employee.name.toUpperCase()).indexOf(searchvalue.toUpperCase())!=-1) ||
                 ((employee.city.toUpperCase()).indexOf(searchvalue.toUpperCase())!=-1) ;
    });
  
    display(filteredemployees);
}



function deleteEmployee(index)
{
    employees.splice(index,1);
    display(employees);
}