//ejecuta la funcion del boton comprobar con ENTER o SPACE
let elInput = document.getElementById('input-texto');
elInput.addEventListener('keyup', function(e) {
  var keycode=e.keyCode;
  if (keycode == 13) {
   btnEncriptar();
  }
});

const inputTexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");
const borrador=document.querySelector(".borrador");

function entrada(){
   borrador.value= "!!! 😁☝️ TIENES QUE INGRESAR EL TEXTO (ARRIBA) QUE DESEES ENCRIPTAR !!!";
   borrador.style.color = "white";
   document.getElementsByClassName("borrador")[0].style.background = "rgba(55,55,00,.7)";
   borrador.style.textAlign = "center"
}
function salida(){
   borrador.value= "!!! TIENES QUE INGRESAR EL TEXTO (ARRIBA) QUE DESEES DESENCRIPTAR 😁☝️!!!";
   borrador.style.color = "white";
   document.getElementsByClassName("borrador")[0].style.background = "rgba(55,55,00,.7)";
   borrador.style.textAlign = "center"
}

function textoVacio(){
   borrador.value= "!!! TIENES QUE INGRESAR EL TEXTO (ARRIBA) 😁☝️ QUE DESEES COPIAR !!!";
   borrador.style.color = "white";
   document.getElementsByClassName("borrador")[0].style.background = "rgba(99,00,00,.7)";
   borrador.style.textAlign = "center"
}

function btnEncriptar(){
   
   if (inputTexto.value==""){
      return entrada();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }

   const textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   inputTexto.value = "";
}
function encriptar(stringEncriptada){

      let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
      stringEncriptada=stringEncriptada.toLowerCase();
               for(let i=0; i < matrizCodigo.length; i++){
                  if(stringEncriptada.includes(matrizCodigo[i][0])){
                     stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                  }
               }
         return stringEncriptada;
   
}
function desencriptar(stringDesencriptada){
let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringDesencriptada=stringDesencriptada.toLowerCase();

for(let i=0; i < matrizCodigo.length; i++){
   if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
      }
   }

return stringDesencriptada;
}

function btnDesencriptar(){

   if (mensaje.value==""){
      return salida();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }

   const textoDesencriptado= desencriptar(mensaje.value);
   inputTexto.value = textoDesencriptado;
   inputTexto.style.color = "white";
}

function btnCopiarEncriptado(){
   
   if (mensaje.value==""){
      return textoVacio();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }
   const textoCopiado= copiarEncriptado(mensaje.value);
   borrador.value = textoCopiado;
   
   mensaje.Select;
   navigator.clipboard.writeText(mensaje.value);
   document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";

   alert("Texto Encriptado copiado: "+ mensaje.value);
}
function copiarEncriptado(stringCopiado){
   stringCopiado=mensaje.value;
   return stringCopiado;
}
function btnCopiarOriginal(){

   if (inputTexto.value==""){
      return textoVacio();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }

   const textoCopiadoOriginal= copiarOriginal(inputTexto.value);
   borrador.value = textoCopiadoOriginal;
   borrador.style.color = "white";
   
   mensaje.Select;
   navigator.clipboard.writeText(inputTexto.value);
   document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
   
   alert("Texto Original copiado: "+ inputTexto.value);
}
function copiarOriginal(stringCopiado){
   stringCopiado=inputTexto.value;
   return stringCopiado;
}

function btnBorrar(){
   inputTexto.style.color = "black";
   document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
   borrador.style.textAlign = "left"
   return mensaje.value="", inputTexto.value = "", borrador.value="";

   
}