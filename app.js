//Day 0: Hello, World
/*
let inputString = prompt("Plese enter a string: ")

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    console.log(inputString)
}
processData(inputString)

*/




// Day 1: Data Types
/*
let str = prompt("Please enter your name ")
console.log("Hello " + str + " !")

let firstInteger = prompt("Please enter First Number :")
let secondInteger = prompt("Please enter Second Number :")
let sum = Number(firstInteger)+Number(secondInteger)
console.log(sum)
*/




// Day 2: Operators
/*
let meal_cost = Number(prompt("Lütfen ücret girin : "))
let tax_percent = Number(prompt("Lütfen vergi oranı girin : "))
let tip_percent = Number(prompt("Lütfen tip oranı girin : "))
let tax = meal_cost * (tax_percent / 100);
let tip = meal_cost * (tip_percent / 100)
console.log(Math.round((meal_cost) + tip + tax))
*/

//Day 3: Intro to Conditional Statements

/*
function main(N) {

        if(N%2 == 0){
            if(N>=3 && N<=5){
               console.log("Not Weird") 
            }
            else if(N<=20 && N>=6){
                console.log("Weird")
            }
            else
            console.log("Not Weird")
        }
        else
       console.log("Weird")
    }

    main() // PLEASE GIVE NUMBER PARAMETER HERE

*/

/*
//Day 4: Class vs. Instance


class Person{
    constructor(initialAge){
        this.initialAge = initialAge;
    }
    
    amIOld(){
        switch(true){
            case (this.initialAge < 0):
                this.initialAge = 0;
                console.log("Age is not valid, setting age to 0.");
                console.log("You are young.");
                break;
            case (this.initialAge < 13):
                console.log("You are young.");
                break;
            case (this.initialAge >= 13 && this.initialAge <18):
                console.log("You are a teenager.");
                break;
            default:
                console.log("You are old.");
                break;    
        }
    };
    yearPasses(){
            this.initialAge+=1;
    };
}
var myPerson = new Person

console.log(myPerson.amIOld(23)) // PLEASE GIVE NUMBER PARAMETER HERE

*/


//Day 5: Loops

/*
function main(n) {
    let i=""
    for(i=1; i<=10; i++){
        let resume = i*n;
        console.log(`${n} x ${i} = ${resume}`)
    }
}

main(10) // PLEASE GIVE A NUMBER PARAMETER 

*/

// Day 6: Let's Review

/*
let input = [2, "Hacker", "Rank"]
function processData(input) {
    let newInput = input.slice(1);

    newInput.forEach(myFuncion = (item) => {
        let odd = ""
        let even = ""

        for (i = 0; i <= item.length; i++)
        i % 2 ? even += item[i] : odd += item[i];
        console.log(`${odd} ${even}`)

    })

}
processData(input)

*/

/*
Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

Sample Input
4
1 4 3 2

Sample Output
2 3 4 1

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    let newArr = arr.reverse().toString().replace(/,/g, " ")

    console.log(newArr)
}

*/