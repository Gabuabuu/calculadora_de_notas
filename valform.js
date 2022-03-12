const init = () => {
  const inputEmail = document.querySelector('input[type="email"]');
  
  const inputPassword = document.querySelector('input[type="password"]');
  const submitButton = document.querySelector('.login-botao');
  
  if(submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();//previnir evento default do botom (recarregar pagina);
      
      fetch('https://reqres.in/api/login',{
        method:'POST',
        headers: {
          'ContentType': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmail.value
        })
      })
    })
  }
}

window.onload = init
