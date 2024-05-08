function enviar(){
    let numeroA = Number(document.getElementById('numero-a').value)
    let numeroB = Number(document.getElementById('numero-b').value)
    const mensagem = document.getElementById('mensagem')
    
    if(numeroA < numeroB){
        mensagem.style.display = 'block'
        mensagem.style.backgroundColor = 'green'
        mensagem.style.color = 'white'
        mensagem.innerHTML = `O número ${numeroA} é menor que o número ${numeroB}, parabéns!`
    } else {
        mensagem.style.display = 'block'
        mensagem.style.backgroundColor = 'red'
        mensagem.style.color = 'white'
        mensagem.innerHTML = `O número ${numeroA} é maior que o número ${numeroB}, tente novamente!`
    }}