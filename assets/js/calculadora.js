function calcular() {
  var b1 = document.getElementById('b1')
  var b2 = document.getElementById('b2')
  var b3 = document.getElementById('b3')
  var b4 = document.getElementById('b4')
  var cal = document.getElementById('cal')
  var res = document.getElementById('res')
  
  var soma1 = Number(b1.value);
  var soma2 = Number(b2.value);
  var soma3 = Number(b3.value);
  var soma4 = Number(b4.value);
  
  var resposta = ((soma1 + soma2 + soma3 + soma4)/4);
  
  res.innerHTML = `Sua nota no final do ano foi ${resposta}`
}

console.log('𝘊𝘳𝘪𝘢𝘥𝘰 e 𝘥𝘦𝘴𝘦𝘯𝘷𝘰𝘭𝘷𝘪𝘥𝘰 𝘱𝘰𝘳: 𝘎𝘢𝘣𝘶')
