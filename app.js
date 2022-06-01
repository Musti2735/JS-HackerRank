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
function main() {
    const N = 23; // PLEASE GIVE A NUMBER HERE
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

    main()

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