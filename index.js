humanAge = prompt("How long have you resided on this planet for?");
dogAge = ((humanAge - 21)/4)+2;
alert("If you were a dog, you would be " + dogAge + " years old!");


usersname = prompt("What is your name?");
userscrush = prompt("Who is the lucky crush?");
var lovescore = Math.random();
lovescore = Math.floor(lovescore*100);
if (lovescore > 70) {
    alert(usersname + " and " + userscrush + " are totes in love! Their lovescore is " + lovescore + "%!");
} else {
    alert(usersname + " and " + userscrush + " met and their lovescore is " + lovescore + "%.");
}

var output = []

function fibonacciGenerator (n) {

    if (n === 1) {
        output = [0]
    
    } else if (n === 2) {
        output = [0, 1]

    } else {
        fibonacciGenerator(n-1)
        var newFib = output[n-2] + output[n-3]
        output.push(newFib)
    }

    return output
}
