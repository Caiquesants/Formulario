document.addEventListener('DOMContentLoaded' , () => {
    const formulario = document.getElementById('meuformulario')
    formulario.addEventListener('submit' , function(event) {
    event.preventDefault();

        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        alert(`Olá ${nome} enviaremos um SMS de confirmação para ${telefone} \n Agradecemos a sua participação.`);

    })}
)
