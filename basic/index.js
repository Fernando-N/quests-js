let contas = [
  function sum(number1, number2) {
    let total = number1 + number2
    return `A soma dos dois números ${number1} + ${number2} e: ${total}`
  },
  function division(number1, number2) {
    let total = number1 / number2
    return `A divisão dos dois números ${number1} / ${number2} e: ${total}`
  },
  function multiplication(number1, number2) {
    let total = number1 * number2
    return `A multiplicação dos dois números ${number1} * ${number2} e: ${total}`
  },
  function subtraction(number1, number2) {
    let total = number1 - number2
    return `A multiplicação dos dois números ${number1} - ${number2} e: ${total}`
  }
]

contas.forEach(item => {
  let p = document.createElement('p')
  p.innerHTML = item(6, 5)
  document.body.appendChild(p)
})
