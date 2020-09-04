//Question 1
console.log('1.Program to search for a particular character in a string');
let string='Test String';
let char='i';
console.log('The String is "'+string+'" and the character searched is-> '+char);
if(string.includes(char)){console.log('Hurrah..!! The searched character is present in the string');}
else{console.log('Sorry,The searched character is not present in the string');}

//Question 2
console.log('2.Program to convert minutes to seconds');
let timeinmins=2;
let timeinsecs=timeinmins*60;
console.log("Number of seconds in "+timeinmins+" Minutes is "+timeinsecs+" Seconds");

//Question 3
console.log("3.Program to search for a element in a array of strings");
let arrayofstrings=["Let","Me","try","the","Code","Once"];
let searchstring='try';
console.log('The Array of strings is '+arrayofstrings+' and the search element is :'+searchstring)
if(arrayofstrings.includes(searchstring)){console.log('Hurrah..!! The element is Present in the array');}
else{console.log('Sorry, The element is not Present in the array');}

//Question 4
console.log("4.Program to display only elements containing 'a' in them from a array");
let arrayofstring=["Let","Me","try","the","Code","Once","Please","Array"];
let char1='a'
console.log('The Array of strings is '+arrayofstring)
console.log('The elements of array containing the character '+char1+' are:')
arrayofstring.forEach(function(ele){if(ele.includes(char1)){console.log(ele)}})

//Question 5
console.log("5.Print an array in reverse order");
let numarray=[2,4,7,5,22,15,17];
console.log("The Elements of array is" + numarray+" and these element in reverse order is "+numarray.reverse());