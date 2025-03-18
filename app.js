// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Lista_Amigos = []

function AgregarAmigo_Secreto() {
    const inputAmigo = document.getElementById("Amigo");
    const Nombre_Amigo = inputAmigo.value.trim();
    if(!Nombre_Amigo || Nombre_Amigo.trim() === "" || !isNaN(Nombre_Amigo)){
        alert("Recuerde insertar un Nombre Valido, Intentelo nuevamente")
        return;
    }
    Lista_Amigos.push(Nombre_Amigo)
    ActualizarListaA();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function ActualizarListaA() {
    const Lista_AmigosUL = document.getElementById("ListaAmigos")
    Lista_AmigosUL.innerHTML = "";

    Lista_Amigos.forEach(Amigo => {
        const Li = document.createElement("Li");
        Li.textContent = Amigo;
        Lista_AmigosUL.appendChild(Li);
    });
}

function Sorteo_AmigoS(){
    if(Lista_Amigos.length === 0){
        alert("No se han registrados Amigos para realizar el sorteo. Agregar Amigos")
    return
    }
    const IndAleatorio = Math.floor(Math.random() * Lista_Amigos.length);
    const AmigosSorteado = Lista_Amigos[IndAleatorio];
    const ResultadoUL = document.getElementById("resultado");
    ResultadoUL.innerHTML = `<Li>${AmigosSorteado}</Li>`;

}

document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("BtnAdicionar").addEventListener("click" , AgregarAmigo_Secreto)
    document.getElementById("BtnSortear").addEventListener("click" , Sorteo_AmigoS)
} );