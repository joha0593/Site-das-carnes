
function validarFormulario() {
 
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var preferencia = document.querySelector('input[name="preferencia"]:checked');
  var tipoCarne = document.getElementById('tipoCarne').value;
  var mensagem = document.getElementById('mensagem').value;

 
  if (nome.trim() === '' || nome.split(' ').length < 2) {
    alert('Nome não pode estar em branco e deve possuir pelo menos 2 nomes.');
    return false;
  }

  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('E-mail inválido.');
    return false;
  }

  var telefoneLimpo = telefone.replace(/[\s()-]/g, '');
  if (telefoneLimpo.length !== 11) {
    alert('Telefone deve ter 11 caracteres.');
    return false;
  }

  if (!preferencia) {
    alert('Selecione pelo menos uma preferência.');
    return false;
  }

 
  if (tipoCarne === 'selecione') {
    alert('Selecione um tipo de carne favorita.');
    return false;
  }

  if (mensagem.trim().length < 5) {
    alert('A mensagem deve ter pelo menos 5 caracteres.');
    return false;
  }

 return true;
}