// Task -1
//Simple Programs todo for variables
//Declare four variables without assigning values and print them in console

let a,b,c,d
console.log(a,b,c,d)

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let first_name,last_name,marital_status,country,age
first_name = 'thakur'
last_name = 'rohith'
marital_status = 'single'
country = 'India'
age = 23

// Declare variables to store your first name, last name, marital status, country and age in a single line
let first_name1,last_name1,marital_status1,country1,age1
[first_name1,last_name1,marital_status1,country1,age1] = ['Thakur', 'rohith', 'single', 'india', '23']
console.log(first_name1,last_name1,marital_status1,country1,age1)

// Convert the string to integer
let str1 = '120wqrt'
console.log(`parseInt = ${parseInt(str1)} Number = ${Number(str1)}`)


// Task 2: Simple Programs todo for Operators
// Square of a number
let num = Math.pow(2, 4);
console.log(num);


//Swapping 2 numbers
a = 2
b = 5
c = a
a = b
b = c
console.log("a = ",a," b = ",b)

//Celsius to Fahrenheit conversion
const celsius = 55
const fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


// Power of any number x ^ y.
num = Math.pow(2, 4);
console.log(num);

// Write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/

let n = 7
for(let i=1;i<=n;i++){
    console.log('#'.repeat(i))
}


// Find the person is ur friend or not.

const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
let found = dataHandling(friends,'Jeff');
console.log(friends[found])
function dataHandling(input, name){
    return input.indexOf(name)
}

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAKchandran'];
var friends2 = ['Gabbar','Rajinikanth','Mass','Spiderman','Jeff','ET'];
friends1 = friends1.concat(friends2)
friends1.sort(function(a,b){
    return a.localeCompare(b)
})
console.log(friends1.join(' , '))





