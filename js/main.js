
function clicou(){

//    alert("Obrigado por Clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://www.linkedin.com/in/paolo-da-silva-ab275b54/");
    window.location.href = "https://www.linkedin.com/in/paolo-da-silva-ab275b54/";
}
function trocar(elemento){

//  document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o Mouse";
//  alert("trocar Texto");
}
function voltar(elemento){
//  document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "Passe o Mouse Aqui";
}
function load(){
    alert("Pagina Carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}