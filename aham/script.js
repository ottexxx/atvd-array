var objetos = Array('Cadeira', 'Impressora', 'Garfo');
var inputText = document.getElementById('inputText');
var btnAdd = document.getElementById('btnAdd');
var btnSort = document.getElementById('btnSort');

function adicionarObjeto() {
var valor = inputText.value.trim();
        
if (valor === '') {
  alert('Informe um valor válido');
} else if (objetos.includes(valor)) {
  alert('Objeto já foi adicionado');
} else {
  objetos.push(valor);
  console.log(objetos);
  inputText.value = '';
}
}
    function ordenarObjetos() {
    objetos.sort();
    console.log(objetos);
      }

btnAdd.addEventListener('click', adicionarObjeto);
btnSort.addEventListener('click', ordenarObjetos);
