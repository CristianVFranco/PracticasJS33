function calculoDeIMC(peso, altura) {
  return (resultado = peso / (altura * altura))
}

const Indice = calculoDeIMC(55, 1.7)

function interpretarIMC() {
  if (Indice < 18.5) {
    console.log(
      'Tu indice de masa corporal es:',
      Indice,
      'esto indica que te encuentras en BAJO PESO'
    )
  } else if (Indice >= 18.5 && Indice <= 24.9) {
    console.log(
      'Tu indice de masa corporal es:',
      Indice,
      'esto indica que te encuentras en PESO SALUDABLE'
    )
  } else if (Indice >= 25 && Indice <= 29.9) {
    console.log(
      'Tu indice de masa corporal es:',
      Indice,
      'esto indica que te encuentras en SOBREPESO'
    )
  } else if (Indice >= 30) {
    console.log(
      'Tu indice de masa corporal es:',
      Indice,
      'esto indica que te encuentras en OBESIDAD ESTAS MARRANITO PUES'
    )
  }
}

interpretarIMC()
