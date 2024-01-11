window.alert('Hej och välkommen till min enkla miniräknare.')

let number1 = parseInt(window.prompt('Ge mig ett nummer!', '1'))

let number2 = parseInt(window.prompt('Ge mig ett till nummer!', '1'))

let operator = window.prompt('Vad ska jag göra med dessa? Ange: + - * eller /', '+' )

let result

if (operator === '+' ) {
    result = parseInt(number1) + parseInt(number2)
}
else if (operator === '-' ) {
    result = number1 - number2
}
else if (operator === '*' ) {
    result = number1 * number2
}
else if (operator === '/' ) {
    result = number1 / number2
}
else {
    console.log('Ange en giltig operator tack')
}

console.log('Resultatet blir: ' + result)

window.alert('Trevligt att du ville titta in. Om du vill räkna mer måste du tyvärr uppdatera sidan :)')