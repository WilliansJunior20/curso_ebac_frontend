const numA = document.getElementById('numero-A')
const numB = document.getElementById('numero-B')
const form = document.getElementById('form')


function validaform(numA, numB) {
    return numA.value < numB.value;
}

function formularioValido(formularioValor) {
    return formularioValor == true
}

form.addEventListener('submit', function(e) {
    
        e.preventDefault();
        const mensagemSucesso = `Seu formulário é valido pois o número <b>${numA.value}</b> é menor que o número <b>${numB.value}</b>!`;

        formValido = validaform(numA, numB) 
        if (formValido == true) {
            const containerMensagemSucesso = document.querySelector('.sucsess-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            numA.value = '';
            numB.value = '';
        }
        else {
            numB.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
        }
    })
