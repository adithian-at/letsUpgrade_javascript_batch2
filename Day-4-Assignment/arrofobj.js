let students =[
    {
        name: "Atsaya",
        age: 24,
        country:"USA",
        Hobbies:["Singing","Dancing","Watching Movies"]

    },
    {
        name: "Adi",
        age: 25,
        country:"India",
        Hobbies:["Coding","Sleeping","Watching Movies"]
    },
    {
        name: "Anisha",
        age: 32,
        country:"India",
        Hobbies:["Eating","Dancing","Watching Movies"]
    }
];

function printobjects()
{
    students.forEach(function(stud){
        console.log(stud);
    });
}

function findage()
{
    students.forEach(function(stud){
        if(stud.age < 30){
            console.log(stud);
        }
    });
}

function findcountry()
{
    students.forEach(function(stud){
        if(stud.country == "India"){
            console.log(stud);
        }
    });
}

printobjects();
findage();
findcountry();