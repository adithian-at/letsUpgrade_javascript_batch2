// Objects

// collection of properties (feature that it has)
// & methods(work that it does)

// Properties-variables
// methods-functions

let avenger={
    name:"Ironman",
    age:50,
    weapons:['Arc reactor','Laser Beam','Micro-Missile'],
    address:{
        planet:"Earth",
        home:"Bungalow"
    },


    printweapon:function(){
        this.weapons.forEach(function(ele){
            console.log(ele);
        });
    },

    printaddress()
    {
        console.log(this.address);
    }

};
// when template literal is used back tick has to be used
console.log(`The name is ${avenger.name} and the age is ${avenger.age}`);
console.log(avenger["name"]);
//dynamickey

let dynamickey="age"
console.log(avenger[dynamickey]);

//Array in class
console.log(avenger.weapons[1]);
avenger.weapons.forEach(function(weapon){
    console.log(weapon);
});

console.log(avenger.address.planet);

//function call using this
avenger.printweapon();
avenger.printaddress();



let friends=[
    {
        name:"reguram",
        age:24
    },
    {
        name:"Aslam",
        age:23
    },
    {
        name:"keerthi",
        age:25
    }
]

console.log(friends);