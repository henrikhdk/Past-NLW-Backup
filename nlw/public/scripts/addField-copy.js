// Procurar o botao
document.querySelector("#add-time")
// Quando cliclar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: Verdadeir ou Falso

    const fields = newFieldContainer
    
    console.log(fields[0].value = "")

    // Colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}