let num1=20;
let num2=40;
let result =num1+num2;
console.log(result);

// function declaration

function add()
{
    let num1=20;
let num2=40;
let result =num1+num2;
console.log(result);
}
add();
add();

// Value pushed to the function is called arguements

function add1(num1,num2)
{
    let result=num1+num2;
    console.log(result);
}
add1(30,50);
add1(7,10);


//function expression
const addition=function(num1,num2)
{
    let result=num1+num2;
    console.log(result);
}

addition(1,2);
addition(10,40);

//hoisting functions moved up if declared in non expression way

//Function call with returning value

function add2(num1,num2)
{
    let result=num1+num2;
    return result;
}

let res=add2(4,5)
console.log(res);

//adding one variable to undefined
add1(40);

