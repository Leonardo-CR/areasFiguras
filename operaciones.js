function calcularArea () {
  const base = parseInt(document.getElementById('base').value)
  const altura = parseInt(document.getElementById('altura').value)

  if (base > 0 && altura > 0) {
    const area = base * altura
    document.getElementById('area').value = area
  } else {
    if (base < 0) {
      alert("El valor de la base es invalido")
      document.getElementById('base').value = '0'
    }
    if (altura < 0) {
      alert("El valor de la altura es invalido")
      document.getElementById('altura').value = '0'
    }

    document.getElementById('area').value = '0'
  }
}

function limpiaValores () {
  document.getElementById('base').value = '0'
  document.getElementById('altura').value = '0'
  document.getElementById('area').value = '0'
}

function calcularAreaT () {
  const base = parseInt(document.getElementById('base').value)
  const altura = parseInt(document.getElementById('altura').value)

  if (base > 0 && altura > 0) {
    const area = base * altura/2
    document.getElementById('area').value = area
  }
  else {
    if (base < 0) {
      alert("El valor de la base es invalido")
      document.getElementById('base').value = '0'
    }
    if (altura < 0) {
      alert("El valor de la altura es invalido")
      document.getElementById('altura').value = '0'
    }

    document.getElementById('area').value = '0'
  }
}
