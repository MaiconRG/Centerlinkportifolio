// Mostrando Div e Escondendo
var botao  = document.getElementById("btn_design");
botao.addEventListener("click", function(){

    var verificar1 = document.getElementById("pagina_certificados");
    var verificar2 = document.getElementById("pagina_desenvolvimento")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
    
    var container = document.getElementById("pagina_design");
    container.classList.toggle("hide");
})

var botao  = document.getElementById("btn_certificados");
botao.addEventListener("click", function(){

    var verificar1 = document.getElementById("pagina_design");
    var verificar2 = document.getElementById("pagina_desenvolvimento")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
    var container = document.getElementById("pagina_certificados");
    container.classList.toggle("hide");
})

var botao  = document.getElementById("btn_desenvolvimento");
botao.addEventListener("click", function(){

    var verificar1 = document.getElementById("pagina_certificados");
    var verificar2 = document.getElementById("pagina_design")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
          
    var container = document.getElementById("pagina_desenvolvimento");
    container.classList.toggle("hide");
})

/*

Manipula o CSS com JS
botao.addEventListener("click", function(){
    var container =  document.getElementById("pagina_design")

    if(container.style.display === "none"){
        container.style.display = "block"
    } else{
        container.style.display = "none"
    }

})

*/

