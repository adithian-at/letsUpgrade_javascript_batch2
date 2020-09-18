let buss =[];
// if (localStorage.getItem("buss") == null) {
//     localStorage.setItem("buss", JSON.stringify(buss));
//   }


function display(inarray=undefined)
{
    let tabledata ="";
    let busarray;
    if (inarray == undefined) {
        busarray = JSON.parse(localStorage.getItem("buss"));
    } else {
        busarray = inarray;
    }
    
    busarray.forEach(function(bus,index)
    {
        let currentrow = `<tr>
        <td>${index +1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.busnumber}</td>
        <td>${bus.passengerCapacity}</td>
        </tr>
        `;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;

}

display();

function addbus(e)
{
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let busnum = document.getElementById("busnum").value;
    let passcapacity = document.getElementById("passcapacity").value;
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.busnumber = busnum;
    bus.passengerCapacity = Number(passcapacity);
  
    let buss = JSON.parse(localStorage.getItem("buss"));
    buss.push(bus);
    localStorage.setItem("buss", JSON.stringify(buss));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("busnum").value = "";
    document.getElementById("passcapacity").value = "";
}

function searchbySource()
{
    let searchvalue = document.getElementById("searchSource").value;
    
    let buss = JSON.parse(localStorage.getItem("buss"));

    let filteredbus = buss.filter(function(bus)
    {
        return ((bus.source.toUpperCase()).indexOf(searchvalue.toUpperCase())!=-1);
    });
    
    display(filteredbus);
}

function searchbyDestination()
{
    let searchvalue2 = document.getElementById("searchDestination").value;
    let buss = JSON.parse(localStorage.getItem("buss"));
    
    let filteredbus2 = buss.filter(function(bus)
    {
        return ((bus.destination.toUpperCase()).indexOf(searchvalue2.toUpperCase())!=-1);
    });
   
    display(filteredbus2);
}

