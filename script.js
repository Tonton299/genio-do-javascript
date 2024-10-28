const lampada = document.getElementById("lampada")
//console.log(lampada);
// estamos guardando na vaiavel lampada uma tag
// documento acessa a tag pelo ID

const button = document.getElementById("btn")
//console.log(button)

let lampOn = false;
// false ou true é um dado boleano

// () => {}; arrow function
button.addEventListener("click", () => {
    lampOn = !lampOn;
    lampada.src = lampOn
        ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
})
// operador ternario -condicional
/*
    comentario em varias linhas
*/